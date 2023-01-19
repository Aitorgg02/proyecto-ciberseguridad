import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarVulnerabilidadComponent } from './editar-vulnerabilidad.component';

describe('EditarVulnerabilidadComponent', () => {
  let component: EditarVulnerabilidadComponent;
  let fixture: ComponentFixture<EditarVulnerabilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarVulnerabilidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarVulnerabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
