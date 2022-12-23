import { Component, createSignal } from 'solid-js';

import { EditorSerieComponent } from '../editor/component.solid';
import { CreateSerieController } from './controller';

export const CreateSerieComponent: Component = () => {
  const [_store, setStore] = createSignal<CreateSerieController>({} as CreateSerieController, { equals: false });
  const ctrl = new CreateSerieController({
    hooks: {
      doRender: () => {
        setStore({ ...ctrl } as CreateSerieController);
      },
    },
  });
  setStore(ctrl);

  return (
    <form
      onSubmit={(event: Event) => {
        event.preventDefault();
        event.stopPropagation();
        ctrl.onSubmit();
      }}
    >
      <h2>Create a new measuring serie</h2>
      <EditorSerieComponent editorForm={ctrl.editorForm} />
      <button className="primary" type="submit" id="submit">
        Add
      </button>
      <button
        className="btn"
        type="reset"
        id="cancel"
        onClick={() => {
          ctrl.onCancel();
        }}
      >
        Abbrechen
      </button>
    </form>
  );
};
