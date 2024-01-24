// tabs.component.ts

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css'],
})
export class TabsComponent {
  @Input() currentIndex = 0;
  @Output() currentIndexChanged = new EventEmitter();
  tabs = ['.', '.', '.', '.'];

  changeTab(index: number) {
    this.currentIndexChanged.emit(index);
  }
}
