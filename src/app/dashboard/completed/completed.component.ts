import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Education } from 'src/app/interfaces/education';
import { Personal } from 'src/app/interfaces/personal';
import { Skills } from 'src/app/interfaces/skills';
import { DataFlowService } from 'src/app/services/data-flow.service';
import { StepService } from 'src/app/services/step.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css'],
})
export class CompletedComponent {
  constructor(
    private service: StepService,
    private dataService: DataFlowService
  ) {}

  completeButton() {
    const defaultEducation: Education = {
      degree: '',
      passingYear: null,
      cgpa: null,
      grade: '',
    };
    const defaultPersonal: Personal = {
      fname: '',
      lname: '',
      extra: '',
      email: '',
      number: null,
    };

    this.dataService.saveEducationFormValue(defaultEducation);
    this.dataService.savePersonalValue(defaultPersonal);

    this.service.resetIndex();
  }
}
