import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { StepService } from 'src/app/services/step.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent {
  skillForm: FormGroup;
  constructor(private fb: FormBuilder, private service: StepService) {
    this.skillForm = this.fb.group({
      sports: ['', Validators.required],
      gaming: ['', Validators.required],
      extra: ['', Validators.required],
      skill: [''],
      newSkill: this.fb.array([], Validators.minLength(1)),
    });
  }
  get newSkill() {
    return this.skillForm.get('newSkill') as FormArray;
  }

  get sports() {
    return this.skillForm.controls['sports'];
  }
  get gaming() {
    return this.skillForm.controls['gaming'];
  }
  get extra() {
    return this.skillForm.controls['extra'];
  }

  addSkill(): void {
    const checkSkill = this.skillForm.get('skill')?.value.trim();
    const skill = this.skillForm.get('skill')?.value;

    if (checkSkill !== '') {
      this.newSkill.push(this.fb.control(skill));
      this.skillForm.get('skill')?.setValue('');
    }
  }

  removeSkill(index: number) {
    this.newSkill.removeAt(index);
  }

  next() {
    if (this.newSkill.length > 0) {
      this.service.nextIndex();
    } else {
      alert('Please fill in all required fields and add at least one skill.');
    }
  }
}
