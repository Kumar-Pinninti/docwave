import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { DocumentService } from '../services/document.service';

@Injectable({
  providedIn: 'root'
})
export class DocumentResolver implements Resolve<any> {
  // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
  //   return of(true);
  // }
  constructor(private documentService: DocumentService) {}

  // resolve(route: ActivatedRouteSnapshot) {
  //   const documentId = route.paramMap.get('id');
  //   return this.documentService.getDocumentById(documentId);
  // }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    const documentId = route.paramMap.get('id');
    if (documentId) {
      const document = this.documentService.getDocumentFromLocalStorageOrDummy(documentId);
      if (document) {
        return document;
      }
    }
    return null;
  }
}
