import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Proposal } from './proposal';

@Injectable()
export class ProposalService {
  private proposalsUrl = 'http://localhost:3002/proposals';

  constructor(
    private http: Http
  ) {}

  // ################################################################
  //
  // Proposals (work with API index)
  //
  // ################################################################
  // function will return an observable that returns an array of documents.
  // Note the argument syntax: Observable<arg>
  getProposals(): Observable<Proposal[]> {
    // connect to API using http lib from constructor above
    return this.http.get(this.proposalsUrl)
                    // send request, get response and convert to json
                    .map((response: Response) => <Proposal[]>response.json())
                    .catch(this.handleError);
  }

  // ################################################################
  //
  // Proposal (work with API show)
  //
  // ################################################################
  getProposal(id: number) {
    return this.http.get(this.proposalsUrl + '/' + id + '.json')
  }

  // ################################################################
  //
  // Create New Proposal (work with API new/create)
  //
  // ################################################################
  createProposal(proposal) {
    // set headers hash that Rails API is expecting "Hey Rails, I'm sending json data"
    let headers = new Headers({ 'Content-Type': 'application/json'});
    let options = new RequestOptions({ headers: headers });
    // POST to our Proposals API with our JSON formatted new proposal object
    return this.http.post(this.proposalsUrl, JSON.stringify(proposal), {
      headers: headers}).map((res: Response) => res.json());
  }

  // ################################################################
  //
  // Angular Error Handler
  //
  // ################################################################
  // Include error handling code from Angular docs
  private handleError (error: Response | any) {
    // In a real world app, we might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
