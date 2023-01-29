import {Backdrop as backdrop} from './Backdrop';
import {Button as button} from './Button';
import {Input as input} from './Input';
import {Paper as paper} from './Paper';
import {Tooltip as tooltip} from './Tooltip';
import {Typography as typography} from './Typography';

export default function ComponentsOverrides(theme) {
  return Object.assign(
      input(theme),
      paper(theme),
      button(theme),
      tooltip(theme),
      backdrop(theme),
      typography(theme),
  );
}
