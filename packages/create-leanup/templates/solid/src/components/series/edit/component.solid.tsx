import { Component, createSignal } from 'solid-js';

import { ResolvedRoute } from '../../app/controller';
import { EditorSerieComponent } from '../editor/component.solid';
import { EditSerieController } from './controller';

interface Props {
  resolvedRoute: ResolvedRoute;
}

export const EditSerieComponent: Component<Props> = (props: Props) => {
  const [_store, setStore] = createSignal<EditSerieController>({} as EditSerieController, { equals: false });
  const ctrl = new EditSerieController({
    hooks: {
      doRender: () => {
        setStore({ ...ctrl } as EditSerieController);
      },
    },
  });
  setStore(ctrl);

  ctrl.changeMeasuredSerie(parseInt(props.resolvedRoute.data?.id || '0'));

  return (
    <form
      onSubmit={(event: Event) => {
        event.preventDefault();
        event.stopPropagation();
        ctrl.onSubmit();
      }}
    >
      <h2>Edit a existing measuring serie</h2>
      <EditorSerieComponent editorForm={ctrl.editorForm} />
      <button className="primary" type="submit" id="submit">
        Edit
      </button>
      <button
        className="secondary"
        type="reset"
        id="cancel"
        onClick={() => {
          ctrl.onCancel();
        }}
      >
        Abbrechen
      </button>
      <button
        className="danger"
        id="delete"
        type="button"
        onClick={() => {
          ctrl.onDelete();
        }}
      >
        Delete
      </button>
    </form>
  );
};
