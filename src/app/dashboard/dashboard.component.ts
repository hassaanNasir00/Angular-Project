// dashboard.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StepService } from '../services/step.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  title = ['EDUCATION', 'PERSONAL', 'SKILLS', 'Completed'];
  description = [
    'Share your academic journey with us! Fill in your qualifications, institutions, and achievements. Your education matters! 📚✨',
    'Tell us a bit about yourself! Share contact details, hobbies, and a quick intro. Lets connect! 🌟👋',
    'Showcase your expertise! Use the Skills Form to highlight your talents and capabilities. Lets bring your skills into focus! 🚀🌐',
    'Congrats your form is completed and submited successfully!',
  ];
  currentIndex: number = 0;

  constructor(private route: Router, private service: StepService) {
    this.service.currentIndexSubject.subscribe((index) => {
      // console.log(index, 'index');
      this.currentIndex = index;

      // console.log(this.currentIndex, 'Current Index');
    });
  }
}
