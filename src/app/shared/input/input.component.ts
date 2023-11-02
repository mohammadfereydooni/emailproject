import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() lable = '';
  @Input() control!: FormControl;
  @Input() type = '';
  @Input() placeholder = 'userName';

  showErrors() {
    const { errors, dirty, touched } = this.control;
    return errors && dirty && touched;
  }

  getErrorMessage() {
    if (this.control.hasError('required')) {
      return 'You must enter a value';
    } else if (this.control.hasError('maxlength')) {
      return 'you must enter a value more 100 word';
    } else if (this.control.hasError('minlength')) {
      return 'you must enter a value more 3 word';
    } else if (this.control.hasError('nonUniqueUsername')) {
      return 'this username use allredy';
    } else if (this.control.hasError('unknownError')) {
      return 'this username use unknown';
    } else if (this.control.hasError('passworddontmatch')) {
      return 'password dont match';
    }
    return 'oookk';
  }
}
