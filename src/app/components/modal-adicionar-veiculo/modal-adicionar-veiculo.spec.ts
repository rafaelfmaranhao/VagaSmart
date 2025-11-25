import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAdicionarVeiculo } from './modal-adicionar-veiculo';

describe('ModalAdicionarVeiculo', () => {
  let component: ModalAdicionarVeiculo;
  let fixture: ComponentFixture<ModalAdicionarVeiculo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalAdicionarVeiculo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAdicionarVeiculo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
