import { Component, OnInit } from '@angular/core';
import { Document } from './document'

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html',
  styleUrls: ['documents.component.css']
})

export class DocumentsComponent implements OnInit {
  pageTitle: string = "Document Dashboard"

  documents: Document[];
}
