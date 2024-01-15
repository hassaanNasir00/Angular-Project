import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  logo: string = 'EcommerceApp';
  navBarList: string[] = ['About', 'Home', 'Contact', 'Demo', 'Pages'];

  constructor() {}
}
