import { ListOf } from '@leanup/lib/pattern/list-of';
export declare class ValidationHandler {
    readonly validators: ListOf<Function>;
    validate(value: unknown, fast?: boolean): Error[];
}
