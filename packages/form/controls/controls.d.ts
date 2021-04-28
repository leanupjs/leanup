import { ListOf } from '@leanup/lib/pattern/list-of';
import { ValidationHandler } from '../handlers/validation.handler';
declare abstract class AbstractControl {
    readonly changeListeners: ListOf<Function>;
    protected readonly errors: ListOf<Error>;
    private readonly _parentForms;
    private _name;
    private _validationHandler;
    private _notifyTimeout;
    constructor(name: string);
    get name(): string;
    set name(value: string);
    get error(): Error | null;
    get id(): string;
    get valid(): boolean;
    findMeInParentForm(control: AbstractControl): boolean;
    addParentForm(form: FormControl): void;
    removeParentForm(form: FormControl): void;
    protected setValidationHandler(validationHandler: ValidationHandler, value?: unknown): void;
    protected validate(value: unknown): void;
    protected notify(): void;
}
export declare enum InputControlTypes {
    checkbox = "checkbox",
    date = "date",
    email = "email",
    number = "number",
    password = "password",
    radio = "radio",
    select = "select",
    slider = "slider",
    text = "text"
}
export interface InputControlProps {
    info?: string;
    label?: string;
    disabled?: boolean;
    mandatory?: boolean;
    readonly?: boolean;
    placeholder?: string;
    type?: string;
    value?: unknown;
}
export declare class InputControl extends AbstractControl implements InputControlProps {
    private _info;
    private _label;
    private _disabled;
    private _mandatory;
    private _readonly;
    private _placeholder;
    private _type;
    private _value;
    private _oldValue;
    private _valueTimeout;
    constructor(name: string, properties?: InputControlProps);
    get info(): string;
    set info(value: string);
    get disabled(): boolean;
    set disabled(value: boolean);
    get mandatory(): boolean;
    set mandatory(value: boolean);
    get readonly(): boolean;
    set readonly(value: boolean);
    get label(): string;
    set label(value: string);
    get placeholder(): string;
    set placeholder(value: string);
    get type(): string;
    set type(value: string);
    get oldValue(): unknown;
    get value(): unknown;
    set value(value: unknown);
    setValidationHandler(validationHandler: ValidationHandler): void;
}
export declare class FormControl extends AbstractControl {
    private readonly controls;
    get valid(): boolean;
    addConrol(control: FormControl | InputControl): void;
    removeControl(control: FormControl | InputControl): void;
    getControls(): Array<FormControl | InputControl>;
    getControl(name: string): FormControl | InputControl;
    getData(): Object;
    setValidationHandler(validationHandler: ValidationHandler): void;
}
export declare class FormFactory {
    static createForm(name: string, json: Record<string, any>): FormControl;
}
export {};
