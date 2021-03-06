import React, { FormEvent } from 'react';

import { GenericComponent } from '@leanup/lib/components/generic';
import { ReactComponent } from '@leanup/lib/components/react';

import { ResolvedRoute } from '../../app/controller';
import { EditorSerieComponent } from '../editor/component.react';
import { EditSerieController } from './controller';

interface Props {
  resolvedRoute: ResolvedRoute;
}

export class EditSerieComponent extends ReactComponent<Props, EditSerieController> implements GenericComponent {
  public ctrl: EditSerieController = new EditSerieController();

  public constructor(props: Props) {
    super(props);
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
