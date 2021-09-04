import { Component } from 'solid-js';

import { InputControl } from '@leanup/form';

import { InputComponent } from '../../input/component.solid';
import { EditorForm } from './editor.form';

interface Props {
  editorForm: EditorForm;
}

export const EditorSerieComponent: Component<Props> = (props: Props) => {
  return (
    <div>
      <InputComponent control={props.editorForm.getControl('title') as InputControl} />
      <InputComponent control={props.editorForm.getControl('unit') as InputControl} />
    </div>
  );
};
