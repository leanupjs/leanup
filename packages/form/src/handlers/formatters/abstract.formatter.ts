export abstract class AbstractFormatter {
  abstract format(value: unknown): unknown;
  abstract parse(value: unknown): unknown;
}
