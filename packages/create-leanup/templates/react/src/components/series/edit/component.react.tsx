import React, { Component, FormEvent } from 'react';

import { GenericComponent } from '@leanup/lib';

import { ResolvedRoute } from '../../app/controller';
import { EditorSerieComponent } from '../editor/component.react';
import { EditSerieController } from './controller';

interface Props {
  resolvedRoute: ResolvedRoute;
}

export class EditSerieComponent extends Component<Props, EditSerieController> implements GenericComponent {
  public readonly ctrl: EditSerieController;

  public constructor(props: Props) {
    super(props);
    this.ctrl = new EditSerieController({
      hooks: {
        doRender: this.forceUpdate.bind(this),
      },
    });
    this.ctrl.changeMeasuredSerie(parseInt(props.resolvedRoute.data?.id || '0'));
  }

  public render(): JSX.Element {
    return (
      <form
        onSubmit={(event: FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          event.stopPropagation();
          this.ctrl.onSubmit();
        }}
      >
        <h2>Edit a existing measuring serie</h2>
        <EditorSerieComponent editorForm={this.ctrl.editorForm} />
        <button className="primary" type="submit" id="submit">
          Edit
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
        <button
          className="danger"
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
