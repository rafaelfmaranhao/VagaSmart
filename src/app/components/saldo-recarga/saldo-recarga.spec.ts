import { SaldoRecarga } from './saldo-recarga';
import { ComponentFixture, TestBed } from '@angular/core/testing';


describe('SaldoRecarga', () => {
  let component: SaldoRecarga;
  let fixture: ComponentFixture<SaldoRecarga>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SaldoRecarga]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaldoRecarga);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
