import { Component, OnInit } from '@angular/core';
import { DocumentService } from 'src/app/services/document.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  documents: any[] = [];

  constructor(private documentService: DocumentService) {}

  ngOnInit(): void {
    // Try to load documents from local storage
    this.loadDocumentsFromLocalStorage();

    // If no documents in local storage, use dummy data from service
    if (this.documents.length === 0) {
      this.documentService.getDocuments().subscribe((data) => {
        this.documents = data;
      });
    }
  }

  loadDocumentsFromLocalStorage(): void {
    this.documents = this.documentService.getDocumentsFromLocalStorage();
  }


  // loadDocuments(): void {
  //   this.documentService.getDocuments().subscribe((data) => {
  //     this.documents = data;
  //   });
  // }
}
