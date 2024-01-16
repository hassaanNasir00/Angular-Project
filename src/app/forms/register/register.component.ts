import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  showRegister: boolean = true;

  constructor(private route: Router) {}

  onRegister(name: string, email: any, password: any) {
    sessionStorage.setItem('name', name);
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('password', password);

    const storedEmail = sessionStorage.getItem('email');
    const storedPassword = sessionStorage.getItem('password');
    const storedName = sessionStorage.getItem('name');

    if (storedEmail && storedPassword && storedName) {
      this.showRegister = false;
    }
  }

  onLogin(email: any, password: any) {
    const storedEmail = sessionStorage.getItem('email');
    const storedPassword = sessionStorage.getItem('password');

    if (storedEmail == email && storedPassword == password) {
      alert('Login Successfully');
      this.route.navigate(['/dashboard']);
    }
  }
}
