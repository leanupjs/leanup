import { ListOf } from '@leanup/lib/pattern/list-of';
import { ValidationHandler } from '../handlers/validation.handler';
class AbstractControl {
    constructor(name) {
        this.changeListeners = new ListOf(Function);
        this.errors = new ListOf(Error);
        this._parentForms = [];
        this._name = 'unnamed';
        this._validationHandler = new ValidationHandler();
        this._notifyTimeout = setTimeout(() => { }, 0);
        this.name = name;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        if (typeof value === 'string') {
            if (value.length > 0) {
                this._name = value;
            }
            else {
                throw new Error('The name of a control must have a min-length of 1.');
            }
        }
        else {
            throw new Error('The name of a control must be a string.');
        }
    }
    get error() {
        return this.errors.first;
    }
    get id() {
        let id = this.name;
        if (this._parentForms.length > 0) {
            id = `${this._parentForms[0].id}_${id}`;
        }
        return id;
    }
    get valid() {
        return this.errors.length === 0;
    }
    findMeInParentForm(control) {
        if (this === control) {
            return true;
        }
        if (control instanceof FormControl) {
            const findings = [];
            this._parentForms.forEach((formControl) => {
                if (formControl.findMeInParentForm(control) === true) {
                    findings.push(formControl);
                }
            });
            return findings.length > 0;
        }
        else {
            return false;
        }
    }
    addParentForm(form) {
        if (this._parentForms.includes(form) === false) {
            if (form.findMeInParentForm(this) === false) {
                this._parentForms.push(form);
            }
            else {
                throw new Error(`The same form control (${form.name}) leads to a form control loop.`);
            }
        }
        else {
            throw new Error(`An form control with the name '${form.name}' already exists.`);
        }
    }
    removeParentForm(form) {
        const index = this._parentForms.indexOf(form);
        if (index >= 0) {
            this._parentForms.splice(index, 1);
        }
        else {
            throw new Error(`An form control with the name '${form.name}' does not exists.`);
        }
    }
    setValidationHandler(validationHandler, value = null) {
        this._validationHandler = validationHandler;
        this.validate(value);
    }
    validate(value) {
        if (this.errors.set(this._validationHandler.validate(value))) {
            this.notify();
        }
        this._parentForms.forEach((formControl) => {
            formControl.validate(value);
        });
    }
    notify() {
        if (this._notifyTimeout) {
            clearTimeout(this._notifyTimeout);
        }
        this._notifyTimeout = setTimeout(() => {
            this.changeListeners.forEach((changeListener) => {
                changeListener();
            });
        }, 0);
    }
}
export var InputControlTypes;
(function (InputControlTypes) {
    InputControlTypes["checkbox"] = "checkbox";
    InputControlTypes["date"] = "date";
    InputControlTypes["email"] = "email";
    InputControlTypes["number"] = "number";
    InputControlTypes["password"] = "password";
    InputControlTypes["radio"] = "radio";
    InputControlTypes["select"] = "select";
    InputControlTypes["slider"] = "slider";
    InputControlTypes["text"] = "text";
})(InputControlTypes || (InputControlTypes = {}));
export class InputControl extends AbstractControl {
    constructor(name, properties) {
        super(name);
        this._info = '';
        this._label = '';
        this._disabled = false;
        this._mandatory = false;
        this._readonly = false;
        this._placeholder = '';
        this._type = 'text';
        this._value = null;
        this._oldValue = null;
        this._valueTimeout = setTimeout(() => { }, 0);
        if (properties) {
            this.info = properties.info ? properties.info : '';
            this.label = properties.label ? properties.label : '';
            this.disabled = properties.disabled ? properties.disabled : false;
            this.mandatory = properties.mandatory ? properties.mandatory : false;
            this.readonly = properties.readonly ? properties.readonly : false;
            this.placeholder = properties.placeholder ? properties.placeholder : '';
            this.type = properties.type ? properties.type : 'text';
            this.value = properties.value ? properties.value : null;
        }
    }
    get info() {
        return this._info;
    }
    set info(value) {
        if (typeof value === 'string') {
            this._info = value;
            this.notify();
        }
        else {
            throw new Error('The info of a input control must be a string.');
        }
    }
    get disabled() {
        return this._disabled;
    }
    set disabled(value) {
        if (typeof value === 'boolean') {
            this._disabled = value;
            this.notify();
        }
        else {
            throw new Error('The disabled flag of a input control must be a string.');
        }
    }
    get mandatory() {
        return this._mandatory;
    }
    set mandatory(value) {
        if (typeof value === 'boolean') {
            this._mandatory = value;
            this.notify();
        }
        else {
            throw new Error('The mandatory flag of a input control must be a string.');
        }
    }
    get readonly() {
        return this._readonly;
    }
    set readonly(value) {
        if (typeof value === 'boolean') {
            this._readonly = value;
            this.notify();
        }
        else {
            throw new Error('The readonly flag of a input control must be a string.');
        }
    }
    get label() {
        return this._label;
    }
    set label(value) {
        if (typeof value === 'string') {
            this._label = value;
            this.notify();
        }
        else {
            throw new Error('The label of a input control must be a string.');
        }
    }
    get placeholder() {
        return this._placeholder;
    }
    set placeholder(value) {
        if (typeof value === 'string') {
            this._placeholder = value;
            this.notify();
        }
        else {
            throw new Error('The placeholder of a input control must be a string.');
        }
    }
    get type() {
        return this._type.toString();
    }
    set type(value) {
        if (typeof value === 'string') {
            switch (value) {
                case 'checkbox':
                case 'date':
                case 'email':
                case 'number':
                case 'password':
                case 'radio':
                case 'select':
                case 'slider':
                case 'text':
                    this._type = value;
                    this.notify();
                    break;
                default:
                    throw new Error('The type of a input control must be a of the following types: ???.');
            }
        }
        else {
            throw new Error('The type of a input control must be a string.');
        }
    }
    get oldValue() {
        return this._oldValue;
    }
    get value() {
        return this._value;
    }
    set value(value) {
        if (this._valueTimeout) {
            clearTimeout(this._valueTimeout);
        }
        this._valueTimeout = setTimeout(() => {
            this.validate(value);
            this._oldValue = this._value;
            this._value = value;
            this.notify();
        }, 0);
    }
    setValidationHandler(validationHandler) {
        super.setValidationHandler(validationHandler, this.value);
    }
}
export class FormControl extends AbstractControl {
    constructor() {
        super(...arguments);
        this.controls = new ListOf([FormControl, InputControl]);
    }
    get valid() {
        return (this.errors.length === 0 &&
            this.controls.filter((control) => {
                return control.valid === false;
            }).length === 0);
    }
    addConrol(control) {
        if (this.controls.contains(control) === false) {
            control.addParentForm(this);
            this.controls.add(control);
        }
        else {
            throw new Error(`A control with the same name '${control.name}' already exists.`);
        }
    }
    removeControl(control) {
        if (this.controls.contains(control) === true) {
            if (control instanceof AbstractControl) {
                control.removeParentForm(this);
                this.controls.remove(control);
            }
        }
        else {
            throw new Error(`A control with the name '${control.name}' does not exists.`);
        }
    }
    getControls() {
        return this.controls.get();
    }
    getControl(name) {
        return this.controls.find((control) => {
            return control.name === name;
        });
    }
    getData() {
        const data = {};
        this.controls.forEach((control) => {
            if (control instanceof FormControl) {
                data[control.name] = control.getData();
            }
            else if (control instanceof InputControl) {
                data[control.name] = control.value;
            }
            else {
                throw new Error(`The control is neither an instance of FormControl or InputControl.`);
            }
        });
        return data;
    }
    setValidationHandler(validationHandler) {
        super.setValidationHandler(validationHandler);
    }
}
export class FormFactory {
    static createForm(name, json) {
        const form = new FormControl(name);
        for (const name in json) {
            if (json.hasOwnProperty(name)) {
                if (typeof json[name] === 'object' && json[name] !== null) {
                    form.addConrol(FormFactory.createForm(name, json[name]));
                }
                else {
                    const input = new InputControl(name);
                    input.value = json[name];
                    form.addConrol(input);
                }
            }
        }
        return form;
    }
}
//# sourceMappingURL=controls.js.map