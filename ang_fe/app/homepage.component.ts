// Angular allows us to create/divide app on component basis. Think of
// it as a feature driven design pattern.

import { Component } from '@angular/core';

@Component({
  selector: 'main-app',
  template: '<h1>Alo Werld</h1>'
})

// notice naming convention btwn filename and class name
export class HomepageComponent {}
