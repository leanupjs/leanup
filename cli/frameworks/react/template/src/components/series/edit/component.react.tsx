import React from 'react';

import { ReactComponent } from '../../component.react';
import { EditorSerieComponent } from '../editor/component.react';
import { EditSerieController } from './controller';

export class EditSerieComponent extends ReactComponent {
  public constructor(props: any) {
    super(props, new EditSerieController(props.resolvedRoute.params.id));
    this.handleDelete.bind(this);
  }

  private handleDelete() {
    this.$ctrl.onDelete();
  }

  public render() {
    return (
      <form
        onSubmit={(event: Event) => {
          event.preventDefault();
          event.stopPropagation();
          this.$ctrl.onSubmit();
        }}
      >
        <h5>Edit a existing measuring serie</h5>
        <EditorSerieComponent editorForm={this.$ctrl.editorForm} />
        <button className="btn btn-primary" type="submit" id="submit">
          Edit
        </button>
        <button
          className="btn btn-secondary"
          type="reset"
          id="cancel"
          onClick={() => {
            this.$ctrl.onCancel();
          }}
        >
          Abbrechen
        </button>
        <button
          className="btn btn-danger"
          id="delete"
          type="button"
          onClick={() => {
            this.handleDelete();
          }}
        >
          Delete
        </button>
      </form>
    );
  }
}
