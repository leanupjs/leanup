import { InfernoComponent } from '../../component.inferno';
import { InputComponent } from '../../input/component.inferno';
import { EditorSerieController } from './controller';

export class EditorSerieComponent extends InfernoComponent {
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
