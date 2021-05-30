export abstract class AbstractFormatter<ModelValue, ViewValue> {
  abstract format(value: ModelValue): string | number | boolean;
  abstract parse(value: ViewValue): ModelValue;
}
