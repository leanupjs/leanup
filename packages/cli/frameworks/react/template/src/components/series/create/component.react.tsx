import React from 'react';

import { ReactComponent } from '../../component.react';
import { EditorSerieComponent } from '../editor/component.react';
import { CreateSerieController } from './controller';

export class CreateSerieComponent extends ReactComponent {
  public constructor(props: any) {
    super(props, new CreateSerieController());
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
        <h5>Create a new measuring serie</h5>
        <EditorSerieComponent editorForm={this.$ctrl.editorForm} />
        <button className="btn btn-primary" type="submit" id="submit">
          Add
        </button>
        <button
          className="btn"
          type="reset"
          id="cancel"
          onClick={() => {
            this.$ctrl.onCancel();
          }}
        >
          Abbrechen
        </button>
      </form>
    );
  }
}
