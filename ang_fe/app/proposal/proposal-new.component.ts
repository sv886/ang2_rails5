// ################################################################
//
// Dependencies
//
// ################################################################
import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Proposal } from './proposal';
import { ProposalService } from './proposal.service';



// ################################################################
//
// Decorator
//
// ################################################################
@Component({
  moduleId: module.id,
  selector: 'proposal-new',
  templateUrl: 'proposal-new.component.html',
  styleUrls: ['proposal-new.component.css'],
  providers: [ ProposalService ]
})



// ################################################################
//
// Component
//
// ################################################################
export class ProposalNewComponent {
  // create new empty Proposal object
  proposal = new Proposal;
  submitted: boolean = false;

  constructor(
    private proposalService: ProposalService
  ) {}

  createProposal(proposal) {
    // flip boolean that hides form submit button
    this.submitted = true;
    this.proposalService.createProposal(proposal)
        .subscribe(
          data => { return true },
          error => {
            console.log('Error saving proposal');
            return Observable.throw(error);
          }
        );
  }
}
