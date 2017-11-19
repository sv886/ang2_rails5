import { Component } from '@angular/core';

@Component({
  // Angular uses this id to keep track of referenced component
  moduleId: module.id,
  selector: 'app',
  template: '<h1>Navigation</h1>'
})

export class AppComponent {
  title: 'Ang FE Dashboard'
}
