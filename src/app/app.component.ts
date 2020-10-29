import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CustomValidator } from './validators/custom.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ng-custom-validator';

  form = this.fb.group({
    field: ['', CustomValidator.check],
  });

  constructor(private fb: FormBuilder) {}

  onFieldChange(e) {
    console.log('valid', this.form.valid);
  }
}
