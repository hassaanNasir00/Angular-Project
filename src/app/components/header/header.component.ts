import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  logo: string = 'EcommerceApp';
  navBarList: string[] = ['About', 'Home', 'Contact', 'Demo', 'Pages'];
  username: any;

  constructor(private route: Router, private service: DataService) {
    this.service.usernameSubject.subscribe((name) => {
      this.username = name;
      console.log(name, 'testing name');
    });
  }

  isLoggedIn = this.service.isLoggedIn;

  isLoggedOut() {
    this.service.isLogout();
    this.route.navigate(['/']);
  }
}
