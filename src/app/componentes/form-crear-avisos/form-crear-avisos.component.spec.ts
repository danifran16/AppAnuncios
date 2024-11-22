import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { FormCrearAvisosComponent } from './form-crear-avisos.component';

describe('FormCrearAvisosComponent', () => {
  let component: FormCrearAvisosComponent;
  let fixture: ComponentFixture<FormCrearAvisosComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [FormCrearAvisosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FormCrearAvisosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
