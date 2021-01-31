import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { importCatch, run } from './app.run';
import { AppComponent } from './components/app/component.angular';
import { InputComponent } from './components/input/component.angular';
import { CreateSerieComponent } from './components/series/create/component.angular';
import { EditSerieComponent } from './components/series/edit/component.angular';
import { EditorSerieComponent } from './components/series/editor/component.angular';
import { ListSerieComponent } from './components/series/list/component.angular';
import { APP_HTML_ELEMENT } from './shares/constant';

import(
  /* webpackMode: "eager" */
  /* webpackChunkName: "angular.package.json" */
  `@angular/core/package.json`
)
  .then((packageJson: Object) => {
    run('Angular', packageJson, () => {
      const htmlDivElement: HTMLDivElement | null = document.querySelector('div#angular');
      if (htmlDivElement instanceof HTMLDivElement) {
        htmlDivElement.appendChild(APP_HTML_ELEMENT);
      }
    });
  })
  .catch(importCatch);

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
