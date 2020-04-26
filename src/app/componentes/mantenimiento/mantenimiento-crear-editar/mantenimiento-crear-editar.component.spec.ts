import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MantenimientoCrearEditarComponent } from './mantenimiento-crear-editar.component';

describe('MantenimientoCrearEditarComponent', () => {
  let component: MantenimientoCrearEditarComponent;
  let fixture: ComponentFixture<MantenimientoCrearEditarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MantenimientoCrearEditarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MantenimientoCrearEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
