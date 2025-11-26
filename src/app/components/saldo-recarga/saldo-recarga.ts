import { Component, Inject, inject } from '@angular/core';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { FormsModule } from '@angular/forms';
import { BtnInput } from "../btn-input/btn-input";
import { UpdateWalletService } from '../../services/updateWallet.service';

@Component({
  selector: 'app-saldo-recarga',
  standalone: true,
  templateUrl: './saldo-recarga.html',
  styleUrl: './saldo-recarga.css',
  imports: [FormsModule, BtnInput]
})
export class SaldoRecarga {
  valor = '';
  tipoPagamento = '';
  private updateWalletService = inject(UpdateWalletService);
  
  constructor(
    @Inject(DIALOG_DATA) public data: any,
    private dialogRef: DialogRef<SaldoRecarga>
  ) {}


  confirmar(){
      if (!this.valor || Number(this.valor) <= 0){
        alert('Digite um valor válido!')
        return;
      }
      this.dialogRef.close();
  }

  onSubmit() {
    const payload = { type: this.tipoPagamento.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toUpperCase() , value: Number(this.valor) ||0 , walletId: this.data.walletId };
    this.updateWalletService.updateWallet(payload).subscribe({
      next: (response) => {
        this.confirmar();
      },
      error: (err) => {
        console.error('Erro ao atualizar saldo:', err);
        this.dialogRef.close();
      },
    });
  }

  close() {
    this.dialogRef.close();
  }
}
