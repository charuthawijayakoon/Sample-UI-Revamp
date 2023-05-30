// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }



import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { IndividualPrintFormComponent } from './individual-print-form/individual-print-form.component';
import { ConfirmationLetterDownloadComponent } from './confirmation-letter-download/confirmation-letter-download.component';
// import { DialogDemoComponent } from './dialog-demo/dialog-demo.component';

const routes: Routes = [
  // { path: 'individual', component: IndividualPrintFormComponent }
  { path: 'confirmation', component: ConfirmationLetterDownloadComponent }
  // { path: 'dialog', component: DialogDemoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
