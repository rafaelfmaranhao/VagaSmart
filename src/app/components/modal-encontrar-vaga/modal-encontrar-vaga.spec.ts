import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEncontrarVaga } from './modal-encontrar-vaga';

describe('ModalEncontrarVaga', () => {
  let component: ModalEncontrarVaga;
  let fixture: ComponentFixture<ModalEncontrarVaga>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalEncontrarVaga]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEncontrarVaga);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
