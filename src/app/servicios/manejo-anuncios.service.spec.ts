import { TestBed } from '@angular/core/testing';

import { ManejoAnunciosService } from './manejo-anuncios.service';

describe('ManejoAnunciosService', () => {
  let service: ManejoAnunciosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManejoAnunciosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
