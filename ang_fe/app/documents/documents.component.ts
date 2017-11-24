import { Component } from '@angular/core';
import { Document } from './document'

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html'
})

export class DocumentsComponent {
  pageTitle: string = "Document Dashboard"
  // will eventually call Rails API here, docs hardcoded for now
  // create Documents array with JS objects
  documents: Document[] = [
    {
      title: 'My First Doc',
      description: 'k3wL doc brah',
      file_url: 'http://google.com',
      updated_at: '11/24/17',
      image_url: 'http://google.com',
    },
    {
      title: 'My Second Doc',
      description: 'k3wL doc brah',
      file_url: 'http://google.com',
      updated_at: '11/24/17',
      image_url: 'http://google.com',
    },
    {
      title: 'My Third Doc',
      description: 'k3wL doc brah',
      file_url: 'http://google.com',
      updated_at: '11/24/17',
      image_url: 'http://google.com',
    }
  ]
}
