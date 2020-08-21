export class MeasuredItemModel {
  private date: Date;
  private value: number;

  public constructor(date: Date, value: number) {
    this.date = date;
    this.value = value;
  }

  public getDate(): Date {
    return this.date;
  }
  public getValue(): number {
    return this.value;
  }
}
