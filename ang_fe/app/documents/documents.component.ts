import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Document } from './document';
import { DocumentService } from './document.service';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html',
  styleUrls: ['documents.component.css']
})

export class DocumentsComponent implements OnInit {
  pageTitle: string = "Document Dashboard"
  documents: Document[];
  errorMessage: string;
  mode = 'Observable';

  constructor(
    // Use dependency injection to call DocumentService anytime this component
    // is instantiated.
    private documentService: DocumentService,
  ) {}

  ngOnInit() {

  }

  // Why another #getDocuments function? This one will be specific
  // to this component's needs. The function defined in our service is
  // as generic as possible, returning all json available at that endpoint.
  getDocuments() {
    // Call #getDocuments defined in service
    this.documentService.getDocuments()
        // #subscribe communicates with observable asynch stream process. Takes
        // 2 args, first storing results of API call in empty array defined above.
        .subscribe(
          documents => this.documents = documents,
          error => this.errorMessage = <any>error
        )
  }
}
