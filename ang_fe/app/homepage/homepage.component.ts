// Angular allows us to create/divide app on component basis. Think of
// it as a feature driven design pattern.

import { Component } from '@angular/core';

@Component({
  selector: 'main-app',
  template: '<h1>Alo Werld</h1>'
})

// notice naming convention btwn filename and class name
export class HomepageComponent {}

// Will act as a master application component that everything else
// will flow through. Think of our HomepageComponent as simliar to
// the Rails application controller.
