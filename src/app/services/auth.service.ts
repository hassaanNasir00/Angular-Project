// data.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  isLoggedIn = new BehaviorSubject<boolean>(false);
  usernameSubject = new BehaviorSubject<string | null>('');

  constructor() {
    const storedState = localStorage.getItem('isLoggedIn');
    this.isLoggedIn.next(storedState === 'true');

    const storedUsername = sessionStorage.getItem('name');
    this.usernameSubject.next(storedUsername);
  }

  isLogin() {
    localStorage.setItem('isLoggedIn', 'true');
    this.isLoggedIn.next(true);

    const storedUsername = sessionStorage.getItem('name');
    this.usernameSubject.next(storedUsername);
  }

  isLogout() {
    localStorage.removeItem('isLoggedIn');
    this.isLoggedIn.next(false);

    sessionStorage.removeItem('email');
    sessionStorage.removeItem('password');
    sessionStorage.removeItem('name');
  }
}
