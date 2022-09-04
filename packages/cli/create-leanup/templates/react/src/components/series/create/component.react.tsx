import React, { Component } from 'react';

import { GenericComponent } from '@leanup/lib';

import { EditorSerieComponent } from '../editor/component.react';
import { CreateSerieController } from './controller';

export class CreateSerieComponent extends Component<unknown, unknown> implements GenericComponent {
  public readonly ctrl: CreateSerieController;

  public constructor(props: unknown) {
    super(props);
    this.ctrl = new CreateSerieController({
      hooks: {
        doRender: this.forceUpdate.bind(this),
      },
    });
  }

  public render(): JSX.Element {
    return (
      <form
        onSubmit={(event) => {
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
