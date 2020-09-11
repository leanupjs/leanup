import { Component, Input } from '@angular/core';

import { InputControl } from './controller';

@Component({
  selector: 'app-input',
  template: `
    <div class="form-group">
      <label for="{{ control.id }}">{{ control.label }}</label>
      <input class="form-control" id="{{ control.id }}" name="{{ control.name }}" [(ngModel)]="control.value" />
    </div>
  `,
})
export class InputComponent {
  @Input() public control: InputControl;
}
