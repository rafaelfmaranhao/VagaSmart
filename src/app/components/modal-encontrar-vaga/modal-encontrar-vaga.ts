import { Component, Inject, inject } from '@angular/core';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { BtnInput } from "../btn-input/btn-input";
import { Veiculo } from '../../models/veiculo';
import { getVehiclesService } from '../../services/getVehicles.service';
import { CreateGateEventService } from '../../services/createGateEvent.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-encontrar-vaga',
  imports: [FormsModule, BtnInput],
  templateUrl: './modal-encontrar-vaga.html',
  styleUrl: './modal-encontrar-vaga.css',
})
export class ModalEncontrarVaga {
  id = '';
  userId = '';

  selectedVehicleId: string = '';
  selectedType: string = 'AUTO';

  private vehicleService = inject(getVehiclesService);
  private gateEventService = inject(CreateGateEventService);

  constructor(
    @Inject(DIALOG_DATA) public data: any,
    private dialogRef: DialogRef<ModalEncontrarVaga>
  ) {}


  close() {
    this.dialogRef.close();
  }

  listaVeiculos: Veiculo[] = [
    {
      _id: this.id,
      plate: 'JVM-3507',
      model: 'Toyota Corolla',
      userId: this.userId
    }
  ]

  ngOnInit() {
    this.loadVehicles();
  }

  loadVehicles() {
    this.vehicleService.loadVehicles().subscribe({
      next: (response) => {
        const result = response.vehicles.map((v:any) => ({
          _id: v.props._id,
          plate: v.props.plate,
          model: v.props.model,
          userId: v.props.userId
        })); 
        this.listaVeiculos = result;
      if (this.listaVeiculos.length > 0) {
        this.selectedVehicleId = this.listaVeiculos[0]._id;
      }
      },
      error: (err) => {
        console.error('Erro ao carregar dashboard', err);
      },
    });
  }

  onSubmit() {
    const payload = { idVehicle: this.selectedVehicleId, type: this.selectedType };
    this.gateEventService.registerGateEvent(payload).subscribe({
      next: () => {
        this.close();
      },
      error: (err) => {
        console.error('Erro ao criar a entrada', err);
        this.dialogRef.close();
      },
    });
  }


}
