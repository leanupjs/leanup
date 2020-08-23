import { NgModule, VERSION } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DI } from '@leanup/lib/helpers/injector';

import { AppComponent } from './components/app/component.angular';
import { InputComponent } from './components/input/component.angular';
import { CreateSerieComponent } from './components/series/create/component.angular';
import { EditSerieComponent } from './components/series/edit/component.angular';
import { EditorSerieComponent } from './components/series/editor/component.angular';
import { ListSerieComponent } from './components/series/list/component.angular';
import { APP_HTML_ELEMENT } from './shares/constant';

DI.register('Framework', {
  name: 'Angular',
  version: VERSION.full,
});
require('./shares/register');
require('./shares/routing');

const htmlDivElement: HTMLDivElement | null = document.querySelector('div#angular');
htmlDivElement.style.display = 'inline';
htmlDivElement.appendChild(APP_HTML_ELEMENT);

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    InputComponent,
    CreateSerieComponent,
    EditSerieComponent,
    EditorSerieComponent,
    ListSerieComponent,
  ],
  imports: [BrowserModule, FormsModule],
})
export class AppModule {}
