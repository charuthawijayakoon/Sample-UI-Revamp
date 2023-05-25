import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndividualPrintFormComponent } from './individual-print-form.component';

describe('IndividualPrintFormComponent', () => {
  let component: IndividualPrintFormComponent;
  let fixture: ComponentFixture<IndividualPrintFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndividualPrintFormComponent]
    });
    fixture = TestBed.createComponent(IndividualPrintFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
