import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Proposal } from './proposal';

@Component({
  moduleId: module.id,
  selector: 'proposal-show',
  templateUrl: 'proposal-show.component.html',
  styleUrls: ['proposal-show.component.css']
})

export class ProposalShowComponent implements OnInit {
  id: number;
  routeId: any;

  constructor(
    // using 'dependecy injection', let component know as soon as a class is
    // instantiated (someone goes to show page), constructor is called and an
    // instance of the activated route is stored in this arg for future use
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // here we'll get id via params then set above
    // subscribe gives us access to route params
    this.routeId = this.route.params.subscribe(
      params => {
        this.id = +params['id'];
      }
    )
  }
}
