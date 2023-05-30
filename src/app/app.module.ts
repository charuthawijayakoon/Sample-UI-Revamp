import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { ImageModule } from 'primeng/image';
import { InputSwitchModule } from 'primeng/inputswitch';
import { TooltipModule } from 'primeng/tooltip';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
// import {DialogModule, Dialog} from 'primeng/dialog'
import { IndividualPrintFormComponent } from './individual-print-form/individual-print-form.component';
import { ConfirmationLetterDownloadComponent } from './confirmation-letter-download/confirmation-letter-download.component';
import { DialogDemoComponent } from './dialog-demo/dialog-demo.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    IndividualPrintFormComponent,
    ConfirmationLetterDownloadComponent,
    DialogDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    AvatarModule,
    ImageModule,
    InputSwitchModule,
    TooltipModule,
    DialogModule,
    // Dialog,
    ConfirmDialogModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }