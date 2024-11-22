import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ObtenerAvisosComponent } from './obtener-avisos.component';

describe('ObtenerAvisosComponent', () => {
  let component: ObtenerAvisosComponent;
  let fixture: ComponentFixture<ObtenerAvisosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ObtenerAvisosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ObtenerAvisosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
