import { ListOf } from '@leanup/lib/pattern/list-of';
export class ValidationHandler {
    constructor() {
        this.validators = new ListOf(Function);
    }
    validate(value, fast = false) {
        const errors = [];
        try {
            this.validators.forEach((validator) => {
                try {
                    validator(value);
                }
                catch (error) {
                    errors.push(error);
                    if (fast === true) {
                        throw new Error('Be quick and stop the execution of other validation functions. Only one error is enough.');
                    }
                }
            });
        }
        catch (error) { }
        return errors;
    }
}
//# sourceMappingURL=validation.handler.js.map