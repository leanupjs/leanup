import { InputControl } from '@leanup/form/controls/controls';
import { ReactComponent } from '@leanup/lib/components/react';

import { InputComponent } from '../../input/component.react';
import { EditorSerieController } from './controller';
import { EditorForm } from './editor.form';

interface Props {
  editorForm: EditorForm;
}

export class EditorSerieComponent extends ReactComponent<Props, unknown> {
  public constructor(props: Props) {
    super(props, new EditorSerieController());
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
