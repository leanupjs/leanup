import { Component } from 'solid-js';
import { createStore } from 'solid-js/store';

import { InputControl } from '@leanup/form';

import { InputComponent } from '../../input/component.solid';
import { EditorSerieController } from './controller';
import { EditorForm } from './editor.form';

interface Props {
  editorForm: EditorForm;
}

export const EditorSerieComponent: Component<Props> = (props: Props) => {
  const [_store, setStore] = createStore<EditorSerieController>(
    new EditorSerieController({
      hooks: {
        doRender: () => setStore({}),
      },
    })
  );

  return (
    <div>
      <InputComponent control={props.editorForm.getControl('title') as InputControl} />
      <InputComponent control={props.editorForm.getControl('unit') as InputControl} />
    </div>
  );
};
