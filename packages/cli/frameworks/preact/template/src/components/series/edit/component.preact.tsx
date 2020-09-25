import { h, JSX } from 'preact';

import { GenericComponent } from '@leanup/lib/components/generic';
import { PreactComponent } from '@leanup/lib/components/preact';

import { ResolvedRoute } from '../../app/controller';
import { EditorSerieComponent } from '../editor/component.preact';
import { EditSerieController } from './controller';

interface Props {
  resolvedRoute: ResolvedRoute;
}

export class EditSerieComponent extends PreactComponent<Props, EditSerieController> implements GenericComponent {
  public ctrl: EditSerieController;

  public constructor(props: Props) {
    super(props);
    this.ctrl = new EditSerieController(props.resolvedRoute.params.id);
  }

  public render(): JSX.Element {
    return (
      <form
        onSubmit={(event: Event) => {
          event.preventDefault();
          event.stopPropagation();
          this.ctrl.onSubmit();
        }}
      >
        <h5>Edit a existing measuring serie</h5>
        <EditorSerieComponent editorForm={this.ctrl.editorForm} />
        <button className="btn btn-primary" type="submit" id="submit">
          Edit
        </button>
        <button
          className="btn btn-secondary"
          type="reset"
          id="cancel"
          onClick={() => {
            this.ctrl.onCancel();
          }}
        >
          Abbrechen
        </button>
        <button
          className="btn btn-danger"
          id="delete"
          type="button"
          onClick={() => {
            this.ctrl.onDelete();
          }}
        >
          Delete
        </button>
      </form>
    );
  }
}
