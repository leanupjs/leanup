import { Component } from 'solid-js';

import { InputControl } from '@leanup/form';

interface Props {
  control: InputControl;
}

export const InputComponent: Component<Props> = (props: Props) => {
  return (
    <div className="form-group">
      <label htmlFor={props.control.id}>{props.control.label}</label>
      <input
        className="form-control"
        id={props.control.id}
        name={props.control.name}
        value={props.control.value as string}
        onChange={(event) => {
          props.control.value = event.target === null ? '' : event.target.value;
        }}
      />
    </div>
  );
};
