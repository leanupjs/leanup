import { AbstractController } from '@leanup/lib';

import { ValidationHandler } from '../handlers';
import { AbstractControl } from './abstract.control';
import { InputControl } from './input.control';

export enum InputControlTypes {
  checkbox = 'checkbox',
  date = 'date',
  email = 'email',
  number = 'number',
  password = 'password',
  radio = 'radio',
  select = 'select',
  range = 'range',
  text = 'text',
}

export interface FormCtrlProps {
  name: string;
}

export interface InputCtrlProps extends FormCtrlProps {
  label: string;
  info?: string;
  disabled?: boolean;
  mandatory?: boolean;
  readonly?: boolean;
  placeholder?: string;
  type?: InputControlTypes;
  value?: unknown;
}

export interface AbstractControlInterface {
  getError: () => string | null;
  getName: () => string;
  isValid: () => boolean;
  getId: () => string;
  setValidationHandler: (validationHandler: ValidationHandler) => void;
}

export interface FormControlInterface<T extends AbstractControlInterface> extends AbstractControlInterface {
  isDisabled: () => boolean;
  setDisabled: (value: boolean) => void;
  isReadonly: () => boolean;
  setReadony: (value: boolean) => void;
  addControl: (control: T) => void;
  removeControl: (control: T) => void;
  getControls: () => T[];
  getControl: <T>(name: string) => T | undefined;
  setData: (data: Record<string, any>) => void;
  getData: <T extends Record<string, any>>() => T;
  findParentForm: (form: T) => T;
  addParentForm: (form: T) => void;
  removeParentForm: (form: T) => void;
  validate: () => void;
}

export interface InputControlInterface extends AbstractControlInterface {
  info: string;
  label: string;
}
