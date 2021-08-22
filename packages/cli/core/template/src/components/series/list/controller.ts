import { AbstractController, DI, ViewControllerCouple } from '@leanup/lib';

import { MeasuredSerieModel } from '../../../models/measured-series.model';
import { MeasurementService } from '../../../services/measurements/service';
import { RouterService } from '../../../services/router/service';

const PERFORMANCE_ANZAHL = 2500;
const ONE_ARRAY: null[] = [null];
const FULL_ARRAY: null[] = [];
for (let i = 0; i < PERFORMANCE_ANZAHL; i++) {
  FULL_ARRAY.push(null);
}

export class ListSerieController extends AbstractController {
  private readonly measurementService: MeasurementService = DI.get<MeasurementService>('MeasurementService');
  public measuredSeries: MeasuredSerieModel[] = [];
  public measuredSerie: MeasuredSerieModel | null = null;
  // tslint:disable-next-line: no-empty
  public renderView: Function = () => {};
  public elements: null[] = ONE_ARRAY;
  public duration = 0;
  public showPerformanceButton = true;

  public constructor(couple: ViewControllerCouple) {
    super(couple);
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
  }

  public onStart(): void {
    this.showPerformanceButton = false;
    setTimeout(() => {
      const start: number = Date.now();
      this.elements = FULL_ARRAY;
      setTimeout(() => {
        this.duration = (Date.now() - start) / 1000;
        setTimeout(() => {
          this.elements = ONE_ARRAY;
          this.doRender();
        }, 51);
        this.doRender();
      }, 51);
      this.doRender();
    }, 51);
    this.doRender();
  }
}
