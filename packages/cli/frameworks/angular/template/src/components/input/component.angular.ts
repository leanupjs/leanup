import { Component, Input } from '@angular/core';
import { InputControl } from '@leanup/form/controls/controls';

@Component({
  selector: 'app-input',
  template: `
    <div>
      <label for="{{ control.id }}">{{ control.label }}</label>
      <input id="{{ control.id }}" name="{{ control.name }}" [value]="control.value" />
    </div>
  `,
})
export class InputComponent {
  @Input() public control: InputControl;

  public onChange(event: Event) {
    this.control.value = event.target === null ? '' : event.target.value;
  }
}
