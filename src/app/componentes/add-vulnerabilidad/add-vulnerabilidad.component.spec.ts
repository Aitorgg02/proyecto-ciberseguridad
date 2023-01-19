import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVulnerabilidadComponent } from './add-vulnerabilidad.component';

describe('AddVulnerabilidadComponent', () => {
  let component: AddVulnerabilidadComponent;
  let fixture: ComponentFixture<AddVulnerabilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVulnerabilidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVulnerabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
