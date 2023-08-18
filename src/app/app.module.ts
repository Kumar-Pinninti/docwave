import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';
import { DocumentUploadComponent } from './components/document-upload/document-upload.component';
import { DocumentDetailsComponent } from './components/document-details/document-details.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';

import { AuthService } from './services/auth.service';
import { DocumentService } from './services/document.service';
import { FileValidationService } from './services/file-validation.service';
import { DocumentResolver } from './utils/document.resolver';
import { AuthGuard } from './guard/auth.guard';



@NgModule({
  declarations: [
    AppComponent,
    NavigationMenuComponent,
    DocumentUploadComponent,
    DocumentDetailsComponent,
    DashboardComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [AuthService,DocumentService,FileValidationService,DocumentResolver, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
