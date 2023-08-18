import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocumentService } from 'src/app/services/document.service';

@Component({
  selector: 'app-document-upload',
  templateUrl: './document-upload.component.html',
  styleUrls: ['./document-upload.component.scss']
})
export class DocumentUploadComponent implements OnInit {

  title: string = '';
  content: string = '';
  author: string = '';
  version: string = '';
  category: string = '';
  selectedFile: File | null = null;

  constructor(private documentService: DocumentService, private router: Router) {}

  ngOnInit(): void {
  }

  onFileChange(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  uploadDocument(): void {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('title', this.title);
      formData.append('content', this.content);
      formData.append('author', this.author);
      formData.append('version', this.version);
      formData.append('category', this.category);
      formData.append('file', this.selectedFile);

      this.documentService.uploadDocument(formData, this.selectedFile);
      this.title = '';
      this.content = '';
      this.author = '';
      this.version = '';
      this.category = '';
      this.selectedFile = null;

      this.router.navigate(['/dashboard']);
    }
  }
}
