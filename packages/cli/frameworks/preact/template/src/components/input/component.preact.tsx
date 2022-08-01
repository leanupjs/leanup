import { JSX } from 'preact';

import { InputControl } from '@leanup/form/controls/controls';
import { PreactComponent } from '@leanup/lib/components/preact';

interface Props {
  control: InputControl;
}

export class InputComponent extends PreactComponent<Props, unknown> {
  public render(): JSX.Element {
    return (
      <div>
        <label htmlFor={this.props.control.id}>{this.props.control.label}</label>
        <input
          id={this.props.control.id}
          name={this.props.control.name}
          value={this.props.control.value as string}
          onChange={(event): void => {
            this.props.control.value = event.target === null ? '' : event.target.value;
            this.forceUpdate();
          }}
        />
      </div>
    );
  }
}
