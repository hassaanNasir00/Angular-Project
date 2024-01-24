import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StepService {
  formData!: FormGroup;
  currentIndexSubject = new BehaviorSubject<number>(0);

  showExtraInput = new BehaviorSubject<boolean>(false);

  constructor() {}
  updateValue(value: boolean) {
    this.showExtraInput.next(value);
  }
  nextIndex() {
    const currentIndex = this.currentIndexSubject.value;
    const nextIndex = (currentIndex + 1) % 4;
    this.currentIndexSubject.next(nextIndex);
  }

  previousIndex() {
    const currentIndex = this.currentIndexSubject.value;
    const prevIndex = (currentIndex - 1 + 4) % 4;
    this.currentIndexSubject.next(prevIndex);
  }
  resetIndex() {
    this.currentIndexSubject.next(0);
  }
}
