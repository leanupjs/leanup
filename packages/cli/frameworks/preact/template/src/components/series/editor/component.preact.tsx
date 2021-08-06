import { h, JSX } from 'preact';

import { InputControl } from '@leanup/form';
import { GenericComponent, PreactComponent } from '@leanup/lib';

import { InputComponent } from '../../input/component.preact';
import { EditorSerieController } from './controller';
import { EditorForm } from './editor.form';

interface Props {
  editorForm: EditorForm;
}

export class EditorSerieComponent extends PreactComponent<Props, unknown> implements GenericComponent { {
  public ctrl: EditorSerieController = new EditorSerieController();

  public render(): JSX.Element {
    return (
      <div>
        <InputComponent control={this.props.editorForm.getControl('title') as InputControl} />
        <InputComponent control={this.props.editorForm.getControl('unit') as InputControl} />
      </div>
    );
  }
}
