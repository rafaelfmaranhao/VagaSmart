import { Component, inject } from '@angular/core';
import { DialogRef } from '@angular/cdk/dialog';
import { BtnInput } from "../btn-input/btn-input";
import { Veiculo } from '../../models/veiculo';

@Component({
  selector: 'app-modal-encontrar-vaga',
  imports: [BtnInput],
  templateUrl: './modal-encontrar-vaga.html',
  styleUrl: './modal-encontrar-vaga.css',
})
export class ModalEncontrarVaga {
  id = 0;
  userId = 0;

  dialogRef = inject(DialogRef);

  close() {
    this.dialogRef.close();
  }

  listaVeiculos: Veiculo[] = [
    {
      id: this.id,
      plate: 'JVM-3507',
      model: 'Toyota Corolla',
      userId: this.userId
    }
  ]
}
