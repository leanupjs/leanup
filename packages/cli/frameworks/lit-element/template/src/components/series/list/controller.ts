import { AbstractController } from '@leanup/lib/components/generic';
import { DI } from '@leanup/lib/helpers/injector';

import { MeasuredSerieModel } from '../../../models/measured-series.model';
import { MeasurementService } from '../../../services/measurements/service';
import { RouterService } from '../../../services/router/service';

const PERFORMANCE_ANZAHL = 2500;

export class ListSerieController extends AbstractController {
  private readonly measurementService: MeasurementService = DI.get<MeasurementService>('MeasurementService');
  public measuredSeries: MeasuredSerieModel[] = [];
  public measuredSerie: MeasuredSerieModel | null = null;
  // tslint:disable-next-line: no-empty
  public renderView: Function = () => {};
  public elements: any[] = [null];
  public duration = 0;
  public showPerformanceButton = true;

  public constructor() {
    super();
    this.measurementService.observe.subscribe(() => {
      this.update();
    });
    this.update();
  }

  public add(): void {
    RouterService.navigate('series/create');
  }

  public edit(measuredSerie: MeasuredSerieModel): void {
    RouterService.navigate(`series/${measuredSerie.getId()}/edit`);
  }

  public update(): void {
    this.measuredSeries = this.measurementService.getSeries();
    this.renderView();
  }

  public onStart(): void {
    this.showPerformanceButton = false;
    setTimeout(() => {
      const start: number = Date.now();
      this.elements = new Array(PERFORMANCE_ANZAHL);
      setTimeout(() => {
        this.duration = (Date.now() - start) / 1000;
        setTimeout(() => {
          this.elements = [null];
          this.renderView();
        }, 0);
        this.renderView();
      }, 0);
      this.renderView();
    }, 0);
    this.renderView();
  }
}
