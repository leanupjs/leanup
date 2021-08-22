import { Component } from 'solid-js';
import { createStore } from 'solid-js/store';

import { ResolvedRoute } from '../../app/controller';
import { EditorSerieComponent } from '../editor/component.solid';
import { EditSerieController } from './controller';

interface Props {
  resolvedRoute: ResolvedRoute;
}

export const EditSerieComponent: Component<Props> = (props: Props) => {
  const [store, setStore] = createStore<EditSerieController>(
    new EditSerieController({
      hooks: {
        doRender: () => setStore({}),
      },
    })
  );

  store.changeMeasuredSerie(parseInt(props.resolvedRoute.data?.id || '0'));

  return (
    <form
      onSubmit={(event: Event) => {
        event.preventDefault();
        event.stopPropagation();
        store.onSubmit();
      }}
    >
      <h2>Edit a existing measuring serie</h2>
      <EditorSerieComponent editorForm={store.editorForm} />
      <button className="primary" type="submit" id="submit">
        Edit
      </button>
      <button
        className="secondary"
        type="reset"
        id="cancel"
        onClick={() => {
          store.onCancel();
        }}
      >
        Abbrechen
      </button>
      <button
        className="danger"
        id="delete"
        type="button"
        onClick={() => {
          store.onDelete();
        }}
      >
        Delete
      </button>
    </form>
  );
};
