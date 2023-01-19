import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleVulnerabilidadComponent } from './detalle-vulnerabilidad.component';

describe('DetalleVulnerabilidadComponent', () => {
  let component: DetalleVulnerabilidadComponent;
  let fixture: ComponentFixture<DetalleVulnerabilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalleVulnerabilidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleVulnerabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
