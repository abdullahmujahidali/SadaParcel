import type {ComponentProps, ForwardedRef, MutableRefObject} from 'react';
import React, {useEffect, useRef} from 'react';

import {useForm, FormProvider} from 'react-hook-form';
import type {UseFormReturn, UseFormProps} from 'react-hook-form';

import {pick, omit} from 'lodash';
import stableHash from 'stable-hash';

import {ApiErrors, apiToFormErrors} from './utils';
import {FieldValues} from 'react-hook-form/dist/types/fields';
import useTempState from './utils/useTempState';


export type FormProps2<
  TFieldValues extends FieldValues = FieldValues,
  TContext = any,
> = Omit<ComponentProps<'form'>, 'onSubmit' | 'ref' | 'defaultValue'> &
  UseFormProps<TFieldValues, TContext> & {
    onSubmit?: (
      e: Record<string, any>,
      form: UseFormReturn<TFieldValues, TContext>,
    ) => void;
    errors?: ApiErrors;
    enableReinitialize?:
      | boolean
      | {
          keepDirtyValues?: boolean;
          keepDefaultValues?: boolean;
          keepValues?: boolean;
          once?: boolean;
        };
    /**
     * innerRef holds the reference of html form element.
     * form instance returned by useForm is can be accessed via simple ref.
     * */
    innerRef?: MutableRefObject<HTMLFormElement>;
  };

const useFormProps = [
  'mode',
  'reValidateMode',
  'resolver',
  'context',
  'shouldFocusError',
  'shouldUnregister',
  'shouldUseNativeValidation',
  'criteriaMode',
  'delayError',
] as const;

function Form<TFieldValues extends FieldValues = FieldValues, TContext = any>(
    props: FormProps2<TFieldValues, TContext>,
    ref: ForwardedRef<UseFormReturn<TFieldValues, TContext>>,
) {
  const {
    errors,
    enableReinitialize,
    defaultValues,
    innerRef,
    noValidate,
    children,
    onSubmit = () => undefined,
    ...formProps
  } = omit(props, useFormProps) as Omit<
    FormProps2<TFieldValues, TContext>,
    typeof useFormProps[number]
  >;

  const form = useForm({
    ...pick(props, useFormProps),
    mode: props.mode ?? 'onBlur',
    reValidateMode: props.reValidateMode ?? 'onChange',
    defaultValues,
  });
  const updatedOnce = useRef(false);
  const internalErrors = useTempState(errors);

  if (
    internalErrors.current &&
    stableHash(internalErrors.current) !== (form.control as any)?._apiErrorsHash
  ) {
    (form.control as any)._apiErrors = apiToFormErrors(internalErrors.current);
    (form.control as any)._apiErrorsHash = stableHash(internalErrors.current);
  }

  // set the defaultValues to form values only if defaultValues
  // are changed and enableReinitialize is true.
  useEffect(() => {
    if (!enableReinitialize || !defaultValues) return;

    if (
      typeof enableReinitialize === 'object' &&
      enableReinitialize.once &&
      updatedOnce.current
    ) {
      return;
    }

    form.reset(defaultValues, {
      ...(typeof enableReinitialize === 'boolean' ? {} : enableReinitialize),
    });
    updatedOnce.current = true;
  }, [form, defaultValues, enableReinitialize]);

  // sets ref to useForm return value
  if (ref) {
    if (typeof ref === 'object') {
      ref.current = form;
    } else {
      ref(form);
    }
  }

  return (
    <FormProvider {...form}>
      <form
        {...formProps}
        noValidate={noValidate}
        onSubmit={form.handleSubmit(
            (e) => {
              (form.control as any)._apiErrors = null;
              (form.control as any)._apiErrorsHash = null;
              onSubmit(e, form);
            // eslint-disable-next-line no-console
            },
            // (e) => console.log(e),
        )}
        ref={innerRef}
      >
        {children}
      </form>
    </FormProvider>
  );
}

export default React.forwardRef(Form);
