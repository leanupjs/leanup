import { InputControl } from '@leanup/form/controls/controls';
import { InvernoComponent } from '@leanup/lib/components/inferno';

import { InputComponent } from '../../input/component.inferno';
import { EditorSerieController } from './controller';
import { EditorForm } from './editor.form';

interface Props {
  editorForm: EditorForm;
}

export class EditorSerieComponent extends InvernoComponent<Props, unknown> {
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
