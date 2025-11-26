import { DialogRef } from '@angular/cdk/dialog';
import { Component, inject } from '@angular/core';
import { BtnInput } from "../btn-input/btn-input";
import { FormsModule } from '@angular/forms'
import { CreateVehicleService } from '../../services/createVehicle.service';

@Component({
  selector: 'app-modal-adicionar-veiculo',
  imports: [BtnInput, FormsModule],
  templateUrl: './modal-adicionar-veiculo.html',
  styleUrl: './modal-adicionar-veiculo.css',
})
export class ModalAdicionarVeiculo {
  modelo = '';
  placa = '';

  private createVehicle = inject(CreateVehicleService)

  dialogRef = inject(DialogRef);

  onCadastrar() {
    const veiculo = {
      model: this.modelo,
      plate: this.placa
    }

    this.createVehicle.registerVehicle(veiculo).subscribe({
      next: (response) => {
        this.close()
      },
      error: (err) => {
        console.error('Erro ao cadastrar veículo:', err);
        this.dialogRef.close({ sucesso: false });
      },
    });
  }

  close() {
    this.dialogRef.close();
  }
}
