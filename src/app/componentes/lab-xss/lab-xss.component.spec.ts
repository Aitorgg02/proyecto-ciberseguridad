import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabXSSComponent } from './lab-xss.component';

describe('LabXSSComponent', () => {
  let component: LabXSSComponent;
  let fixture: ComponentFixture<LabXSSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LabXSSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LabXSSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
