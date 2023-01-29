/* eslint-disable */
import React, {useState} from 'react';

import {Eye, EyeOff} from 'react-feather';
import {pick, omit} from 'lodash';

import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import type {TextFieldProps} from '@mui/material';

import Controller, {Props as ControllerProps} from 'components/form/Controller';
import {FieldValues, Path} from 'react-hook-form';

export const formFieldProps = [
  'name',
  'required',
  'min',
  'max',
  'maxLength',
  'minLength',
  'pattern',
  'validate',
  'valueAsNumber',
  'valueAsDate',
  'value',
  'setValueAs',
  'shouldUnregister',
  'defaultValue',
  'onChange',
  'onBlur',
  'deps',
] as const;

type Props<
  TFieldValues extends FieldValues = FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>,
> = Omit<ControllerProps<TFieldValues, TName>, 'render'> & Omit<TextFieldProps, 'value' | 'onChange'>;

export default function MuiTextField<
  TFieldValues extends FieldValues = FieldValues,
  TName extends Path<TFieldValues> = Path<TFieldValues>,
>(props: Props<TFieldValues, TName>) {
  const {helperText, children, inputProps, label, type, name, defaultValue, ...mergedProps} = props;

  const pickedProps = pick(mergedProps, formFieldProps) as any;
  const restProps = omit(mergedProps, formFieldProps);

  const [showPass, setShowPass] = useState(false);

  return (
    <Controller
      {...pickedProps}
      defaultValue={defaultValue || ''}
      name={name}
      render={({field: {ref, onChange, onBlur, value}, fieldState: {error}}) => (
        <TextField
          {...restProps}
          error={!!error?.message ?? error}
          helperText={error?.message ?? helperText}
          inputProps={{
            onKeyDown: (e) => {
              if (type === 'number' && ['e', 'E', '+', '-'].includes(e.key)) {
                e.preventDefault();
              }
            },
            ...inputProps,
            ref,
          }}
          label={label}
          onBlur={onBlur}
          InputProps={{
            ...(restProps.InputProps || {}),
            ...(type === 'password'? {
                endAdornment: (
                  <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        className="text-primary-main"
                        onClick={() => setShowPass((s) => !s)}
                      >
                        {showPass ? <Eye size={16} /> : <EyeOff size={16} />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }
              : {}),
          }}
          // eslint-disable-next-line react/jsx-no-duplicate-props
          onChange={onChange}
          type={showPass ? 'text' : type}
          value={value}
        >
          {children}
        </TextField>
      )}
      validate={(value) => {
        if (typeof value === 'string' && pickedProps.required && !value.trim()) {
          return 'Field cannot be left blank!';
        }
        if (typeof pickedProps?.validate === 'function') {
          return pickedProps?.validate(value);
        }
        /* eslint-enable */

        return undefined;
      }}
    />
  );
}
