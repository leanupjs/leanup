abstract class AbstractControl {
  public name = 'unnamed';
  private readonly parentForms: Map<string, FormControl> = new Map();

  constructor(name: string) {
    this.name = name;
  }

  get id(): string {
    let id = '';
    if (this.parentForms.size > 0) {
      id = this.parentForms.values().next().value.id + '_';
    }
    return `${id}${this.name}`;
  }

  public addParentForm(form: FormControl): void {
    if (this.parentForms.has(form.name) === false) {
      this.parentForms.set(form.name, form);
    } else {
      throw new Error(`An form control with the name '${form.name}' already exists.`);
    }
  }

  public removeParentForm(name: string): void {
    if (this.parentForms.has(name) === true) {
      this.parentForms.delete(name);
    } else {
      throw new Error(`An form control with the name '${name}' does not exists.`);
    }
  }
}

export class InputControl extends AbstractControl {
  public label: string | null = null;
  public value: any = null;

  constructor(name: string, properties: any = {}) {
    super(name);
    if (properties) {
      this.label = properties.label;
      this.value = properties.value;
    }
  }
}

export class FormControl extends AbstractControl {
  private readonly inputs: Map<string, InputControl> = new Map();

  public get id(): string {
    return `${this.name}`;
  }

  public addInput(input: InputControl): void {
    if (this.inputs.has(input.name) === false) {
      input.addParentForm(this);
      this.inputs.set(input.name, input);
    } else {
      throw new Error(`An input control with the name '${input.name}' already exists.`);
    }
  }

  public removeInput(name: string): void {
    if (this.inputs.has(name) === true) {
      const input = this.inputs.get(name);
      if (input instanceof InputControl) {
        input.removeParentForm(this.name);
        this.inputs.delete(name);
      }
    } else {
      throw new Error(`An input control with the name '${name}' does not exists.`);
    }
  }

  public getInputs(): Map<string, InputControl> {
    return this.inputs;
  }

  public getInput(name: string): InputControl {
    const input = this.inputs.get(name);
    if (input instanceof InputControl) {
      return input;
    } else {
      throw new Error(`An input control with the name '${name}' does not exists.`);
    }
  }
}
