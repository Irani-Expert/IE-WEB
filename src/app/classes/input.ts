import { FormControl, Validators } from '@angular/forms';

export interface InputInterface {
  readonly id: number;
  name: string;
  label: string;
  type?: string;
  class?: string;
  typeofVlaue: 'number' | 'string' | 'boolean';
  icon?: InputIcon[];
  placeholder?: string;
  required: boolean;
  minLength?: number;
  maxLength?: number;
  hasErr?: boolean;
}
export interface InputIcon {
  readonly id: number;
  placement: 'right-icon' | 'left-icon';
  src?: string;
  className?: string;
  alt: string;
}
export class Input {
  constructor(public inputs: InputInterface[]) {}
  createControl(input: InputInterface) {
    let formControl = new FormControl<typeof input.typeofVlaue | null>(
      null,
      this.validations(input)
    );
    return formControl;
  }
  validations(input: InputInterface) {
    let validators = [];
    if (input.required) {
      validators.push(Validators.required);
      if (input.minLength) {
        validators.push(Validators.minLength(input.minLength));
      }
      if (input.maxLength) {
        validators.push(Validators.maxLength(input.maxLength));
      }
    }
    if (input.type == 'email') {
      validators.push(Validators.email);
    }
    return validators;
  }
}
