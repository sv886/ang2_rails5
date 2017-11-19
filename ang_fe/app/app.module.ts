// Not much logic here. Gets angular system running.
// Manages components in angular application (houses declarations,
// imports modules from other parts of app)

// import from libraries in node_modules
// Rails imports all libs at runtime, Angular takes more lightweight
// approach so need to define imports.
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    HomepageComponent
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule {}
