import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationLetterDownloadComponent } from './confirmation-letter-download.component';

describe('ConfirmationLetterDownloadComponent', () => {
  let component: ConfirmationLetterDownloadComponent;
  let fixture: ComponentFixture<ConfirmationLetterDownloadComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmationLetterDownloadComponent]
    });
    fixture = TestBed.createComponent(ConfirmationLetterDownloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
