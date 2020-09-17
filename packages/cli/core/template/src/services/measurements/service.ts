import { Subject } from 'rxjs';

import { DI } from '@leanup/lib/helpers/injector';

import { MeasuredItemModel } from '../../models/measured-item.model';
import { MeasuredSerieModel } from '../../models/measured-series.model';
import { StorageService } from '../storage/service';

interface MeasurementInterface {
  date: Date;
  value: number;
}

interface MeasuredSerieInterface {
  title: string;
  unit: string;
  id: number;
  measurements: MeasurementInterface[];
}

export class MeasurementService {
  private measuredSeries: MeasuredSerieModel[] = [];
  private readonly storageStorage: StorageService = DI.get<StorageService>('StorageService');
  public readonly observe: Subject<MeasuredSerieModel[]> = new Subject();

  public constructor() {
    this.restore();
  }

  public getSeries(): MeasuredSerieModel[] {
    this.restore();
    return this.measuredSeries;
  }

  public getSerie(id: number): MeasuredSerieModel | undefined {
    return this.measuredSeries.find((measuredSerie: MeasuredSerieModel) => {
      // tslint:disable-next-line: triple-equals
      return measuredSerie.getId() == id;
    });
  }

  public addSerie(serie: MeasuredSerieModel): void {
    if (serie instanceof MeasuredSerieModel) {
      this.measuredSeries.push(serie);
      this.store();
    } else {
      throw new Error(`The measuring serie is not valid!`);
    }
  }

  public removeSerie(serie: MeasuredSerieModel): void {
    const index = this.measuredSeries.indexOf(serie);
    if (index >= 0) {
      this.measuredSeries.splice(index, 1);
      this.store();
    }
  }

  private restore(): void {
    let series: MeasuredSerieInterface[] = <MeasuredSerieInterface[]>this.storageStorage.getItem('measuredSeries');
    this.measuredSeries = [];
    if (Array.isArray(series) === false) {
      series = [];
    }
    series.forEach((serie: MeasuredSerieInterface) => {
      const measuredSerie = new MeasuredSerieModel(serie.title, serie.unit);
      if (typeof serie.id === 'number') {
        measuredSerie.setId(serie.id);
      }
      if (Array.isArray(serie.measurements)) {
        serie.measurements.forEach((measurement: MeasurementInterface) => {
          measuredSerie.addMeasurement(new MeasuredItemModel(measurement.date, measurement.value));
        });
      }
      this.measuredSeries.push(measuredSerie);
    });
  }

  public store(): void {
    const series: Object[] = [];
    this.measuredSeries.forEach((measuredSerie: MeasuredSerieModel) => {
      const measurements: Object[] = [];
      measuredSerie.getMeasurements().forEach((measurement: MeasuredItemModel) => {
        measurements.push({
          date: measurement.getDate(),
          value: measurement.getValue(),
        });
      });
      series.push({
        id: measuredSerie.getId(),
        measurements,
        title: measuredSerie.getTitle(),
        unit: measuredSerie.getUnit(),
      });
    });
    this.storageStorage.setItem('measuredSeries', series);
    this.observe.next();
  }
}
