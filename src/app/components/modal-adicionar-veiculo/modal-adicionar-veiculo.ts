import { DialogRef } from '@angular/cdk/dialog';
import { Component, inject } from '@angular/core';
import { BtnInput } from "../btn-input/btn-input";

@Component({
  selector: 'app-modal-adicionar-veiculo',
  imports: [BtnInput],
  templateUrl: './modal-adicionar-veiculo.html',
  styleUrl: './modal-adicionar-veiculo.css',
})
export class ModalAdicionarVeiculo {
  dialogRef = inject(DialogRef);

  close() {
    this.dialogRef.close();
  }
}
