import { InputControl } from '@leanup/form/controls/controls';
import { AbstractController } from '@leanup/lib/components/generic';
import { DI } from '@leanup/lib/helpers/injector';

import { MeasuredSerieModel } from '../../../models/measured-series.model';
import { MeasurementService } from '../../../services/measurements/service';
import { RouterService } from '../../../services/router/service';
import { EditorForm } from '../editor/editor.form';

export class CreateSerieController extends AbstractController {
  private readonly measurementService: MeasurementService = DI.get('MeasurementService');
  public editorForm: EditorForm = new EditorForm('new');

  public onSubmit(): void {
    const title = <InputControl>this.editorForm.getControl('title');
    const unit = <InputControl>this.editorForm.getControl('unit');
    this.measurementService.addSerie(new MeasuredSerieModel(<string>title.value, <string>unit.value));
    this.measurementService.store();
    this.editorForm = new EditorForm('new');
    this.onCancel();
  }

  public onCancel(): void {
    RouterService.navigate('series');
  }
}
