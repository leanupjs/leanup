import React from 'react';

import { ReactComponent } from '../../component.react';
import { InputComponent } from '../../input/component.react';
import { EditorSerieController } from './controller';

export class EditorSerieComponent extends ReactComponent {
  public constructor(props: any) {
    super(props, new EditorSerieController());
  }

  public render() {
    return (
      <div>
        <InputComponent control={this.props.editorForm.getInput('title')} />
        <InputComponent control={this.props.editorForm.getInput('unit')} />
      </div>
    );
  }
}
