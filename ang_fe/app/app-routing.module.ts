import { NgModule } from '@angular/core';
// import routing libraries
import { RouterModule, Routes } from '@angular/router';

// import components
import { HomepageComponent } from './homepage/homepage.component';

// create constant routes array, routes look similar to json object
const routes: Routes = [
  // only need pathMatch on root route
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
]

// define what's inside of module by passing in meta-data
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
