import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuestraCursoComponent } from './muestra-curso.component';

describe('MuestraCursoComponent', () => {
  let component: MuestraCursoComponent;
  let fixture: ComponentFixture<MuestraCursoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuestraCursoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuestraCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
