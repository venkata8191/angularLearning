import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<h1>{{title}}</h1><h2>{{hero}}</h2>',
})
export class AppComponent {
  title = 'Tour of Heroes';
  hero='windstrom';
}