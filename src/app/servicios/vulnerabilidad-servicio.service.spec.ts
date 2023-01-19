import { TestBed } from '@angular/core/testing';

import { VulnerabilidadServicioService } from './vulnerabilidad-servicio.service';

describe('VulnerabilidadServicioService', () => {
  let service: VulnerabilidadServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VulnerabilidadServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
