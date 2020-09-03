import { DI } from '@leanup/lib/helpers/injector';

import { MeasuredSerieModel } from '../../../models/measured-series.model';
import { MeasurementService } from '../../../services/measurements/service';
import { RouterService } from '../../../services/router/service';
import { EditorForm } from '../editor/editor.form';
import { InputControl } from '@leanup/form/controls/controls';

export class CreateSerieController {
  private readonly measurementService: MeasurementService = DI.get('MeasurementService');
  public editorForm: EditorForm = new EditorForm('new');

  public onSubmit(): void {
    const titleInput: InputControl = this.editorForm.getControl('title');
    const unitInput: InputControl = this.editorForm.getControl('unit');
    this.measurementService.addSerie(
      new MeasuredSerieModel(this.editorForm.getControl('title').value, this.editorForm.getControl('unit').value)
    );
    this.measurementService.store();
    this.editorForm = new EditorForm('new');
    this.onCancel();
  }

  public onCancel(): void {
    RouterService.navigate('series');
  }
}
