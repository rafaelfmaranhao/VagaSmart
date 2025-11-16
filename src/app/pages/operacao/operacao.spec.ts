import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Operacao } from './operacao';

describe('Operacao', () => {
  let component: Operacao;
  let fixture: ComponentFixture<Operacao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Operacao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Operacao);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
