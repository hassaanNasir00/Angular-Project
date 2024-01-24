import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataFlowService } from 'src/app/services/data-flow.service';
import { StepService } from 'src/app/services/step.service';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css'],
})
export class PersonalComponent {
  personalForm: FormGroup;
  cgpaValue: boolean = false;
  constructor(
    private service: StepService,
    private fb: FormBuilder,
    private dataService: DataFlowService
  ) {
    this.personalForm = this.fb.group({
      fname: ['', Validators.required],
      lname: ['', Validators.required],
      email: ['', Validators.required],
      number: [null, Validators.required],
      extra: [''],
    });

    this.service.showExtraInput.subscribe((value) => {
      this.cgpaValue = value;
      console.log(this.cgpaValue, 'Check CGPA');
    });

    const savedValue = this.dataService.getPersonalFormValue();
    if (savedValue) {
      this.personalForm.setValue(savedValue);
    }
  }

  get fname() {
    return this.personalForm.controls['fname'];
  }
  get lname() {
    return this.personalForm.controls['lname'];
  }
  get email() {
    return this.personalForm.controls['email'];
  }
  get number() {
    return this.personalForm.controls['number'];
  }
  get extra() {
    return this.personalForm.controls['extra'];
  }

  next() {
    this.service.nextIndex();
    this.dataService.savePersonalValue(this.personalForm.value);
  }
}
