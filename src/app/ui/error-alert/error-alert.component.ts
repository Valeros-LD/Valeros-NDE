import { Component, input } from '@angular/core';

@Component({
  selector: 'app-error-alert',
  templateUrl: './error-alert.component.html',
})
export class ErrorAlertComponent {
  readonly message = input.required<string>();
}
