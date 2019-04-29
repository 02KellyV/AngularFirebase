import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarUduarioComponent } from './editar-uduario.component';

describe('EditarUduarioComponent', () => {
  let component: EditarUduarioComponent;
  let fixture: ComponentFixture<EditarUduarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarUduarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarUduarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
