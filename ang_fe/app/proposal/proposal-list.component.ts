import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
  moduleId: module.id,
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html'
})

export class ProposalListComponent {
  // Instantiate proposal objects w TypeScript
  // Variable: Class    = create new obj w params defined in model
  proposalOne: Proposal = new Proposal(15, 'Abc Company', 'http://portfolio.joe-schmo.com', 'Ruby on Rails',
    150, 120, 15, 'john@doe.com')
  proposalTwo: Proposal = new Proposal(3, '123 Company', 'http://portfolio.joe-schmo.com', 'Ruby on Rails',
    150, 120, 15, 'john@doe.com')
  proposalThree: Proposal = new Proposal(999, 'Algo Empresa', 'http://portfolio.joe-schmo.com', 'Ruby on Rails',
    150, 120, 15, 'john@doe.com')

  proposals: Proposal[] = [
    this.proposalOne,
    this.proposalTwo,
    this.proposalThree
  ]
}
