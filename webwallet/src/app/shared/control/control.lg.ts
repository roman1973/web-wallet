import { FormControl } from '@angular/forms';

export class ControlLg {
  checkOnNumb(control: FormControl ) {
    if (typeof control.value !== 'object') {
      if (!control.value.split('').some(x => !isNaN(x))) {
        return {
          'numError': true
        };
      }
      return null;
    }
  }
}
