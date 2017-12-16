// Acts as an intermediary btwn our Rails docs API and our Angular docs
// component. This logic could be placed inside of the component, but it's
// best to separate concerns and handle as a 'service' for scalability.

import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

// The ReactiveX library for JavaScript, RxJS, is a library for reactive
// programming using Observables to make it easier to compose asynchronous
// or callback-based code.
import { Observable } from 'rxjs/Rx';
import { Document } from './document';

@Injectable()
export class DocumentService {
  private documentsUrl = 'http://localhost:3001/freelance_documents.json';

  // constructor + dependency injection to make call to Http lib as soon as
  // DocumentService class is instantiated
  constructor(
    private http: Http
  ) {}

  // function will return an observable that returns an array of documents.
  // Note the argument syntax: Observable<arg>
  getDocuments(): Observable<Document[]> {
    // connect to API using http lib from constructor above
    return this.http.get(this.documentsUrl)
                    // send request, get response and convert to json
                    .map((response: Response) => <Document[]>response.json())
  }
}
