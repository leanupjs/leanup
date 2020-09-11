import React from 'react';

import { ReactComponent } from '../component.react';

export class InputComponent extends ReactComponent {
  public render() {
    return (
      <div className="form-group">
        <label htmlFor={this.props.control.id}>{this.props.control.label}</label>
        <input
          className="form-control"
          id={this.props.control.id}
          name={this.props.control.name}
          value={this.props.control.value}
          onChange={(event: Event) => {
            this.props.control.value = event.target.value;
            this.forceUpdate();
          }}
        />
      </div>
    );
  }
}
