import { Injectable } from '@angular/core';
import { Education } from '../interfaces/education';
import { Personal } from '../interfaces/personal';
import { Skills } from '../interfaces/skills';

@Injectable({
  providedIn: 'root',
})
export class DataFlowService {
  educationFormValue!: Education;
  personalFormValue!: Personal;
  skillsFormValue!: Skills;

  saveEducationFormValue(value: Education) {
    this.educationFormValue = value;
  }

  getEducationFormValue(): Education {
    return this.educationFormValue;
  }

  savePersonalValue(value: Personal) {
    this.personalFormValue = value;
  }

  getPersonalFormValue(): Personal {
    return this.personalFormValue;
  }
  saveSkillsValue(value: Skills) {
    this.skillsFormValue = value;
  }

  getSkillsFormValue(): Skills {
    return this.skillsFormValue;
  }
}
