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

  @Input()
  proposal: Proposal;

  ngOnInit(): void {
    // calls #proposalService, gets id from params and
    // stores in proposalRequest variable
    let proposalRequest = this.route.params
        .flatMap((params: Params) =>
          this.proposalService.getProposal(+params['id']));
    proposalRequest.subscribe(response => this.proposal = response.json());
  }
}
