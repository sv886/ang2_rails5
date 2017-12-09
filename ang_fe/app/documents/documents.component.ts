import { Component } from '@angular/core';
import { Document } from './document'

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html',
  styleUrls: ['documents.component.css']
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
      image_url: 'https://images.unsplash.com/photo-1457305237443-44c3d5a30b89?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=4063ad6beb4b1939f2ed65ef3207c5d4',
    },
    {
      title: 'My Second Doc',
      description: 'k3wL doc brah',
      file_url: 'http://google.com',
      updated_at: '11/24/17',
      image_url: 'https://images.unsplash.com/photo-1494707924465-e1426acb48cb?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=ee4015ca6443db139e9b20fa5a247586',
    },
    {
      title: 'My Third Doc',
      description: 'k3wL doc brah',
      file_url: 'http://google.com',
      updated_at: '11/24/17',
      image_url: 'https://images.unsplash.com/uploads/141103282695035fa1380/95cdfeef?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&s=0618057b2833ef619152fda24ed6817f',
    }
  ]
}
