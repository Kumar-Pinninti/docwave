import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  private documents: any[] = [
    {
      id: '1',
      title: 'Document 1',
      content: 'This is a sample 1 document content.',
      author: 'John Doe',
      version: '1.0',
      category: 'Sample Category',
      date: '2023-08-16 15:30',
      fileSrc: '../../../assets/pencil.jpg',
    },
    {
      id: '2',
      title: 'Document 2',
      content: 'This is a sample 2 document content.',
      author: 'Jane Smith',
      version: '2.0',
      category: 'Sample Category',
      date: '2023-08-16 09:45',
      fileSrc: '../../../assets/pencil.jpg',
    },
    {
      id: '3',
      title: 'Document 3',
      content: 'This is a sample 3 document content.',
      author: 'Will Smith',
      version: '2.3',
      category: 'Sample Category',
      date: '2023-08-17 10:45',
      fileSrc: '../../../assets/pencil.jpg',
    },
    {
      id: '4',
      title: 'Document 4',
      content: 'This is a sample 4 document content.',
      author: 'Joe Smith',
      version: '1.5',
      category: 'Sample Category',
      date: '2023-08-17 10:45',
      fileSrc: '../../../assets/pencil.jpg',
    },
    {
      id: '5',
      title: 'Document 5',
      content: 'This is a sample 5 document content.',
      author: 'steve Smith',
      version: '2.0',
      category: 'Sample Category',
      date: '2023-08-17 10:45',
      fileSrc: '../../../assets/pencil.jpg',
    },
  ];

  getDocuments(): Observable<any[]> {
    return of(this.documents);
  }

  // getDocumentById(id: any): Observable<any | undefined> {
  //   const document = this.documents.find((doc) => doc.id === id);
  //   return of(document);
  // }

  getDocumentFromLocalStorageOrDummy(id: string | null): any {
    if (id) {
      const document = this.getDocumentFromLocalStorage(id);
      if (document) {
        return document;
      }
    }
    return this.documents.find((doc) => doc.id === id);
  }

  getDocumentFromLocalStorage(id: string): any {
    const storedDocuments = localStorage.getItem('documents');
    if (storedDocuments) {
      const documents = JSON.parse(storedDocuments);
      return documents.find((document: any) => document.id === id);
    }
    return null;
  }

  uploadDocument(formData: FormData, selectedFile: File): void {

    const fileExtension = selectedFile.name.split('.').pop();
    
    const newDocument = {
      id: (this.documents.length + 1).toString(),
      title: formData.get('title'),
      content: formData.get('content'),
      author: formData.get('author'),
      version: formData.get('version'),
      category: formData.get('category'),
      date: new Date().toLocaleString(),
      fileSrc: URL.createObjectURL(selectedFile) + "." + fileExtension,
    };

    // Save the new document to local storage
    this.documents.push(newDocument);
    this.saveDocumentsToLocalStorage();
  }


  saveDocumentsToLocalStorage(): void {
    localStorage.setItem('documents', JSON.stringify(this.documents));
  }

  getDocumentsFromLocalStorage(): any[] {
    const storedDocuments = localStorage.getItem('documents');
    return storedDocuments ? JSON.parse(storedDocuments) : [];
  }
}
