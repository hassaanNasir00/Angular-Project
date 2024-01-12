import { Component } from '@angular/core';
import {
  EmailValidator,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent {
  formData: FormGroup;
  formDetails = { name: '', email: '', number: '', password: '', gender: '' };
  constructor(private fb: FormBuilder) {
    this.formData = this.fb.group({
      name: ['', [Validators.required]],
      password: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      number: ['', [Validators.required]],
      gender: ['', [Validators.required]],
    });
  }

  // get name(){
  //   return this.control
  // }

  onSubmit(event: any) {
    console.log(event, '$event');
    console.log(event.target, '$event,target');
    if (this.formData.valid) {
      this.formDetails = {
        name: this.formData.value.name,
        email: this.formData.value.email,
        number: this.formData.value.number,
        password: this.formData.value.password,
        gender: this.formData.value.gender,
      };
    }
  }
}
