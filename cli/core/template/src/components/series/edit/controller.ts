import { DI } from '@leanup/lib/helpers/injector';

import { MeasuredSerieModel } from '../../../models/measured-series.model';
import { MeasurementService } from '../../../services/measurements/service';
import { RouterService } from '../../../services/router/service';
import { EditorForm } from '../editor/editor.form';

export class EditSerieController {
  private readonly measurementService: MeasurementService = DI.get('MeasurementService') as MeasurementService;
  public editorForm: EditorForm | null = null;
  private measuredSerie: MeasuredSerieModel | undefined;

  public constructor(measuredSerieId: number) {
    this.changeMeasuredSerie(measuredSerieId);
  }

  public changeMeasuredSerie(measuredSerieId: number): void {
    this.measuredSerie = this.measurementService.getSerie(measuredSerieId);
    this.mapTo(this.measuredSerie);
  }

  public updateProps(measuredSerie: MeasuredSerieModel): void {
    if (measuredSerie instanceof MeasuredSerieModel) {
      this.measuredSerie = measuredSerie;
      this.mapTo(measuredSerie);
    }
  }

  public mapTo(measuredSerie: MeasuredSerieModel): void {
    if (measuredSerie instanceof MeasuredSerieModel) {
      this.editorForm = new EditorForm('edit');
      this.editorForm.getInput('title').value = this.measuredSerie.getTitle();
      this.editorForm.getInput('unit').value = this.measuredSerie.getUnit();
    }
  }

  public onDelete(): void {
    if (this.measuredSerie instanceof MeasuredSerieModel) {
      this.measurementService.removeSerie(this.measuredSerie);
      this.onCancel();
    }
  }

  public onSubmit(): void {
    if (this.measuredSerie instanceof MeasuredSerieModel && this.editorForm instanceof EditorForm) {
      this.measuredSerie.setTitle(this.editorForm.getInput('title').value);
      this.measuredSerie.setUnit(this.editorForm.getInput('unit').value);
      this.measurementService.store();
      this.onCancel();
    }
  }

  public onCancel(): void {
    RouterService.navigate('series');
  }
}
