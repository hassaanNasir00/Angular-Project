import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Education } from 'src/app/interfaces/education';
import { DataFlowService } from 'src/app/services/data-flow.service';
import { StepService } from 'src/app/services/step.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent {
  eduForm: FormGroup;
  constructor(
    private service: StepService,
    private fb: FormBuilder,
    private dataService: DataFlowService
  ) {
    this.eduForm = this.fb.group({
      degree: ['', Validators.required],
      passingYear: [null, Validators.required],
      cgpa: [null, Validators.required],
      grade: ['', Validators.required],
    });

    const savedValue = this.dataService.getEducationFormValue();
    if (savedValue) {
      this.eduForm.setValue(savedValue);
    }
  }

  get degree() {
    return this.eduForm.controls['degree'];
  }
  get passingYear() {
    return this.eduForm.controls['passingYear'];
  }
  get cgpa() {
    return this.eduForm.controls['cgpa'];
  }
  get grade() {
    return this.eduForm.controls['grade'];
  }

  next() {
    const cpgaValue = this.eduForm.get('cgpa')?.value;
    const checkValue = cpgaValue > 3;
    this.service.updateValue(checkValue);
    this.dataService.saveEducationFormValue(this.eduForm.value);
    this.service.nextIndex();
  }

  // public educationDetails: Education = null;
}
