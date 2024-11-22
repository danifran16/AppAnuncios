import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CrearAvisosPage } from './crear-avisos.page';

describe('CrearAvisosPage', () => {
  let component: CrearAvisosPage;
  let fixture: ComponentFixture<CrearAvisosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearAvisosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
