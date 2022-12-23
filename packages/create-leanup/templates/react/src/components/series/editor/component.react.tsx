import React, { Component } from 'react';

import { InputControl } from '@leanup/form';
import { GenericComponent } from '@leanup/lib';

import { InputComponent } from '../../input/component.react';
import { EditorSerieController } from './controller';
import { EditorForm } from './editor.form';

interface Props {
  editorForm: EditorForm;
}

export class EditorSerieComponent extends Component<Props, unknown> implements GenericComponent {
  public readonly ctrl: EditorSerieController;

  public constructor(props: Props) {
    super(props);
    this.ctrl = new EditorSerieController({
      hooks: {
        doRender: this.forceUpdate.bind(this),
      },
    });
  }

  public render(): JSX.Element {
    return (
      <div>
        <InputComponent control={this.props.editorForm.getControl('title') as InputControl} />
        <InputComponent control={this.props.editorForm.getControl('unit') as InputControl} />
      </div>
    );
  }
}
