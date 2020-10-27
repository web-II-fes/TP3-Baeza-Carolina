import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MuestraPersonaComponent } from './muestra-persona.component';

describe('MuestraPersonaComponent', () => {
  let component: MuestraPersonaComponent;
  let fixture: ComponentFixture<MuestraPersonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MuestraPersonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MuestraPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
