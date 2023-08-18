import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DocumentService } from 'src/app/services/document.service';

@Component({
  selector: 'app-document-details',
  templateUrl: './document-details.component.html',
  styleUrls: ['./document-details.component.scss']
})
export class DocumentDetailsComponent implements OnInit {

  document: any;
  fileType: string | null = null;

  constructor(private route: ActivatedRoute, private router: Router, private documentService: DocumentService) {}

  ngOnInit(): void {
    this.route.data.subscribe(data => {
      this.document = data.document;
      //this.fileType = this.getFileType(this.document.fileSrc);
      this.getFileType()
    });
  }

  getFileType(): void {
    const fileExtension = this.getFileExtension(this.document.fileSrc);

    if (['jpg', 'jpeg', 'png', 'gif'].includes(fileExtension)) {
      this.fileType = 'image';
    } else if (['mp4', 'webm'].includes(fileExtension)) {
      this.fileType = 'video';
    } else if (fileExtension === 'pdf') {
      this.fileType = 'pdf';
    } else {
      this.fileType = 'unknown';
    }
  }

  private getFileExtension(fileSrc: string): string {
    const data = fileSrc.split(';').shift()?.toLowerCase() || '';

    return data.split('/').pop() || '';
  }

  // private getFileType(fileSrc: string): string {
  //   const extension = fileSrc.substr(fileSrc.lastIndexOf('.') + 1).toLowerCase();
  //   if (['jpg', 'jpeg', 'png', 'gif'].includes(extension)) {
  //     return 'image';
  //   } else if (extension === 'pdf') {
  //     return 'pdf';
  //   } else if (['mp4', 'webm'].includes(extension)) {
  //     return 'video';
  //   }
  //   return 'unknown';
  // }

  nagivagateTo() {
    this.router.navigate(['/dashboard']);
  }

}
