import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileValidationService {

  constructor() { }

  isValidFile(file: File): boolean {
    const allowedTypes = ['image/jpeg', 'image/png', 'video/mp4', 'application/pdf'];
    const maxSize = 4 * 1024 * 1024; // 4 MB

    return allowedTypes.includes(file.type) && file.size <= maxSize;
  }
}
