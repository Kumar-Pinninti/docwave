import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DocumentDetailsComponent } from './components/document-details/document-details.component';
import { DocumentUploadComponent } from './components/document-upload/document-upload.component';

import { AuthGuard } from './guard/auth.guard';
import { DocumentResolver } from './utils/document.resolver';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'document/:id',
    component: DocumentDetailsComponent,
    canActivate: [AuthGuard],
    resolve: { document: DocumentResolver },
  },
  {
    path: 'document-upload',
    component: DocumentUploadComponent,
    canActivate: [AuthGuard],
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
