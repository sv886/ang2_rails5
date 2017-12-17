// ################################################################
//
// Dependencies
//
// ################################################################
import { Component } from '@angular/core';
import { Proposal } from './proposal';



// ################################################################
//
// Decorator
//
// ################################################################
@Component({
  moduleId: module.id,
  selector: 'proposal-new',
  templateUrl: 'proposal-new.component.html',
  styleUrls: ['proposal-new.component.css']
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
}
