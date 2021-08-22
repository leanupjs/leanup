import { Component } from 'solid-js';
import { createStore } from 'solid-js/store';

import { EditorSerieComponent } from '../editor/component.solid';
import { CreateSerieController } from './controller';

export const CreateSerieComponent: Component = () => {
  const [store, setStore] = createStore<CreateSerieController>(
    new CreateSerieController({
      hooks: {
        doRender: () => setStore({}),
      },
    })
  );

  return (
    <form
      onSubmit={(event: Event) => {
        event.preventDefault();
        event.stopPropagation();
        store.onSubmit();
      }}
    >
      <h2>Create a new measuring serie</h2>
      <EditorSerieComponent editorForm={store.editorForm} />
      <button className="primary" type="submit" id="submit">
        Add
      </button>
      <button
        className="btn"
        type="reset"
        id="cancel"
        onClick={() => {
          store.onCancel();
        }}
      >
        Abbrechen
      </button>
    </form>
  );
};
