import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.css'],
})
export class AddEmpComponent {
  empData: FormGroup;
  empList: any[] = [];

  constructor(private fb: FormBuilder) {
    this.empData = this.fb.group({
      name: ['', [Validators.required]],
      fname: ['', [Validators.required]],
      number: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get name() {
    return this.empData.controls['name'];
  }
  get fname() {
    return this.empData.controls['fname'];
  }
  get email() {
    return this.empData.controls['email'];
  }
  get number() {
    return this.empData.controls['number'];
  }

  onSubmit() {
    if (this.empData.valid) {
      this.empList.push(this.empData.value);

      console.log(this.empData.value);

      this.empData.reset();
    } else {
      console.log('invalid');
    }
  }
  removeEmp(employee: any) {
    const index = this.empList.indexOf(employee);

    if (index !== -1) {
      this.empList.splice(index, 1);
    }
  }
}
