import { Component } from '@angular/core';

@Component({
  // Angular uses this id to keep track of referenced component
  moduleId: module.id,
  selector: 'app',
  template: `

  <h1>Navigation</h1>

  <router-outlet></router-outlet>
  `
})

// <router-outlet> functions similar to Rails layout yield. Anything pulled in
// from router will be rendered inside of our <router-outlet>

export class AppComponent {
  title: 'Ang FE Dashboard'
}

// Will act as a master application component that everything else
// will flow through. Think of our AppComponent as simliar to
// the Rails application controller.
