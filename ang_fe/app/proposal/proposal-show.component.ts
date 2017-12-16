import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Proposal } from './proposal';
import { ProposalService } from './proposal.service';

@Component({
  moduleId: module.id,
  selector: 'proposal-show',
  templateUrl: 'proposal-show.component.html',
  styleUrls: ['proposal-show.component.css'],
  providers: [ ProposalService ]
})

export class ProposalShowComponent implements OnInit {
  constructor(
    // using 'dependecy injection', let component know as soon as a class is
    // instantiated (someone goes to show page), constructor is called and an
    // instance of the follow declarations is stored in this arg for future use
    private http: Http,
    private proposalService: ProposalService,
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
