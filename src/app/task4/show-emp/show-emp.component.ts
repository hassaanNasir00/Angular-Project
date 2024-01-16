import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css'],
})
export class ShowEmpComponent {
  @Input() empList: any[] = [];
  @Output() removeEmpEvent = new EventEmitter<any>();

  removeEmp(employee: any) {
    this.removeEmpEvent.emit(employee);
  }
}
