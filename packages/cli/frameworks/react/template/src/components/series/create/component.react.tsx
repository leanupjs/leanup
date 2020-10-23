import { GenericComponent } from '@leanup/lib/components/generic';
import { ReactComponent } from '@leanup/lib/components/react';

import { EditorSerieComponent } from '../editor/component.react';
import { CreateSerieController } from './controller';

export class CreateSerieComponent extends ReactComponent<unknown, unknown> implements GenericComponent {
  public ctrl: CreateSerieController = new CreateSerieController();
  public constructor(props: unknown) {
    super(props, new CreateSerieController());
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
        <h5>Create a new measuring serie</h5>
        <EditorSerieComponent editorForm={this.ctrl.editorForm} />
        <button className="btn btn-primary" type="submit" id="submit">
          Add
        </button>
        <button
          className="btn"
          type="reset"
          id="cancel"
          onClick={() => {
            this.ctrl.onCancel();
          }}
        >
          Abbrechen
        </button>
      </form>
    );
  }
}
