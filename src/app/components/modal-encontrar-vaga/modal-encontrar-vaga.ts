import { GetUnathorizedGateEventsService } from './../../services/getUnathorizedGateEvents.service';
import { Component, Inject, inject } from '@angular/core';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';
import { BtnInput } from "../btn-input/btn-input";
import { Veiculo } from '../../models/veiculo';
import { getVehiclesService } from '../../services/getVehicles.service';
import { CreateGateEventService } from '../../services/createGateEvent.service';
import { FormsModule } from '@angular/forms';
import { DashboardService } from '../../services/dashboard.service';

@Component({
  selector: 'app-modal-encontrar-vaga',
  imports: [FormsModule, BtnInput],
  templateUrl: './modal-encontrar-vaga.html',
  styleUrl: './modal-encontrar-vaga.css',
})
export class ModalEncontrarVaga {

  selectedVehicleId: string = '';
  selectedType: string = 'AUTO';

  gateEvents: any[] = [];
  listaVeiculos: Veiculo[] = [];

  private vehicleService = inject(getVehiclesService);
  private gateEventService = inject(CreateGateEventService);
  private dashboardService = inject(DashboardService);
  private getUnathorizedGateEvents = inject(GetUnathorizedGateEventsService);

  constructor(
    @Inject(DIALOG_DATA) public data: any,
    private dialogRef: DialogRef<ModalEncontrarVaga>
  ) { }

  ngOnInit() {
    this.loadAllGateEvents();
  }

  close() {
    this.dialogRef.close();
  }

  loadAllGateEvents() {
    let veiculosOcupados: string[] = [];
    let veiculosNaoAutorizados: string[] = [];

    this.dashboardService.loadDashboard().subscribe({
      next: (respDash) => {
        const eventosDashboard = respDash.gateEvent ?? [];

        veiculosOcupados = eventosDashboard.map((ev: any) => ev.vehicle.props._id);

        this.getUnathorizedGateEvents.loadGateEvents().subscribe({
          next: (respUnauthorized) => {
            const unauthorized = respUnauthorized.gateEventInfo ?? [];

            veiculosNaoAutorizados = unauthorized.map((ge: any) => ge.gateEvent.props.vehicleId);

            this.loadVehicles(veiculosOcupados, veiculosNaoAutorizados);
          },
          error: (err) => console.error("Erro ao buscar não autorizados", err),
        });

      },
      error: (err) => console.error("Erro ao buscar dashboard", err)
    });
  }


  loadVehicles(ocupados: string[], naoAutorizados: string[]) {
    this.vehicleService.loadVehicles().subscribe({
      next: (response) => {

        const todosVeiculos = response.vehicles.map((v: any) => ({
          _id: v.props._id,
          plate: v.props.plate,
          model: v.props.model,
          userId: v.props.userId
        }));

        this.listaVeiculos = todosVeiculos.filter((v: any) => 
          !ocupados.includes(v._id) &&
          !naoAutorizados.includes(v._id)
        );

        if (this.listaVeiculos.length > 0) {
          this.selectedVehicleId = this.listaVeiculos[0]._id;
        }
      },
      error: (err) => console.error("Erro ao carregar veículos", err),
    });
  }


  onSubmit() {
    const payload = {
      idVehicle: this.selectedVehicleId,
      type: this.selectedType
    };

    this.gateEventService.registerGateEvent(payload).subscribe({
      next: () => this.close(),
      error: (err) => {
        console.error('Erro ao criar a entrada', err);
        this.dialogRef.close();
      },
    });
  }
}
