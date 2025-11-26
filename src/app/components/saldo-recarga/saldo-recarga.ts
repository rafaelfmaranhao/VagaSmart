import { Component, Inject, Input } from '@angular/core';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { FormsModule } from '@angular/forms';
import { BtnInput } from "../btn-input/btn-input";

@Component({
  selector: 'app-saldo-recarga',
  standalone: true,
  templateUrl: './saldo-recarga.html',
  styleUrl: './saldo-recarga.css',
  imports: [FormsModule, BtnInput]
})
export class SaldoRecarga {
  titulo = '';
  input1 = '';
  input2 = '';
  condicao = '';

  @Input() valor: number | null = 0;
  @Input() tipoPagamento: string = '';

  constructor(
    public dialogRef: DialogRef,
    @Inject(DIALOG_DATA) public data: any
  ) {
    if (data) {
      this.titulo = data.titulo;
      this.input1 = data.input1;
      this.input2 = data.input2;
      this.condicao = data.condicao;
    }
  }

  confirmar(){
    console.log(this.tipoPagamento);
    if (this.condicao == 'adicionar'){
      if (!this.valor || this.valor <= 0){
        alert('Digite um valor válido!')
        return;
      }

      this.dialogRef.close({
        tipo: 'adicionar',
        valor: this.valor
      });
    }
    if(this.condicao == 'pagamento'){
      this.dialogRef.close({
        tipo: 'pagamento',
        metodo: this.tipoPagamento
      })
    }
  }

  close() {
    this.dialogRef.close();
  }
}
