import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Core';

  links = [
    { path: '/', icon: 'home', title: 'Home' },
    { path: '/customers', icon: 'face', title: 'Customer' },
    { path: '/projects', icon: 'projects', title: 'Projects' }
  ];
}
