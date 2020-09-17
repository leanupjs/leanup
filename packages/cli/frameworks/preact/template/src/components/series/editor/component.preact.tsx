import { h } from 'preact';

import { InputControl } from '@leanup/form/controls/controls';
import { GenericComponent } from '@leanup/lib/components/generic';
import { PreactComponent } from '@leanup/lib/components/preact';

import { InputComponent } from '../../input/component.preact';
import { EditorSerieController } from './controller';
import { EditorForm } from './editor.form';

interface Props {
  editorForm: EditorForm;
}

export class EditorSerieComponent extends PreactComponent<Props, unknown> {
  public constructor(props: Props) {
    super(props, new EditorSerieController());
  }

  public render(): preact.JSX.Element {
    return (
      <div>
        <InputComponent control={this.props.editorForm.getControl('title') as InputControl} />
        <InputComponent control={this.props.editorForm.getControl('unit') as InputControl} />
      </div>
    );
  }
}
