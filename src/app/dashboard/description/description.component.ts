import { Component, Input } from '@angular/core';
import { StepService } from 'src/app/services/step.service';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css'],
})
export class DescriptionComponent {
  @Input() title: string[] = [];
  @Input() description: string[] = [];
  @Input() currentIndex: number = 0;

  constructor(private service: StepService) {}
  prev() {
    this.service.previousIndex();
  }
}
