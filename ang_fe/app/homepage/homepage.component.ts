// Angular allows us to create/divide app on component basis. Think of
// it as a feature driven design pattern.

import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'homepage',
  templateUrl: 'homepage.component.html'
})

// notice naming convention btwn filename and class name
export class HomepageComponent {}
