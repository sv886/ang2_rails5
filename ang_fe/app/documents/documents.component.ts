import { Component, OnInit } from '@angular/core';
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
  mode = 'Observable';

  constructor(
    // Use dependency injection to call DocumentService anytime this component
    // is instantiated.
    private documentService: DocumentService,
  ) {}
}
