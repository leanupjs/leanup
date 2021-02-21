import { h, JSX } from 'preact';

import { GenericComponent } from '@leanup/lib/components/generic';
import { PreactComponent } from '@leanup/lib/components/preact';

import { EditorSerieComponent } from '../editor/component.preact';
import { CreateSerieController } from './controller';

export class CreateSerieComponent extends PreactComponent<unknown, unknown> implements GenericComponent {
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
        <h2>Create a new measuring serie</h2>
        <EditorSerieComponent editorForm={this.ctrl.editorForm} />
        <button className="primary" type="submit" id="submit">
          Add
        </button>
        <button
          className="secondary"
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
