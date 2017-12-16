// Acts as an intermediary btwn our Rails docs API and our Angular docs
// component. This logic could be placed inside of the component, but it's
// best to separate concerns and handle as a 'service' for scalability.

import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

// The ReactiveX library for JavaScript, RxJS, is a library for reactive
// programming using Observables to make it easier to compose asynchronous
// or callback-based code.
import { Observable } from 'rxjs/Observable';

@Injectable()
export class DocumentService {

}
