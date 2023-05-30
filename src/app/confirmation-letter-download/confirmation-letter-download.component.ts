import { Component } from '@angular/core';
// import { DialogModule } from 'primeng/dialog';
// import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api';

@Component({
  selector: 'app-confirmation-letter-download',
  templateUrl: './confirmation-letter-download.component.html',
  styleUrls: ['./confirmation-letter-download.component.scss'],
  // providers: [ConfirmationService, MessageService]
})
export class ConfirmationLetterDownloadComponent {

  // visible: boolean;

  displayModal: boolean = false;
  showDialog() {
      // this.visible = true;
      this.displayModal = true;
  }

}