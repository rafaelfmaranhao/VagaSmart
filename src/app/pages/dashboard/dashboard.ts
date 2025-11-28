import { ModalEncontrarVaga } from './../../components/modal-encontrar-vaga/modal-encontrar-vaga';
import { Component, inject, Input } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { Dialog } from '@angular/cdk/dialog';
import { Footer } from '../../components/footer/footer';
import { SaldoRecarga } from '../../components/saldo-recarga/saldo-recarga';
import { ModalAdicionarVeiculo } from '../../components/modal-adicionar-veiculo/modal-adicionar-veiculo';
import { DashboardService } from '../../services/dashboard.service';
import { GateEvent } from '../../models/gateEvent';
import { Card } from '../../components/card/card';
import { CardDashboard } from '../../components/card-dashboard/card-dashboard';
import { getVehiclesService } from '../../services/getVehicles.service';
import { Veiculo } from '../../models/veiculo';
import { UpdateGateEventService } from '../../services/updateGateEvent.service';
import { RouterLink } from '@angular/router';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [LucideAngularModule, Footer, CardDashboard, RouterLink, CurrencyPipe],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
})
export class Dashboard {
  @Input() titulo = '';
  @Input() status = '';
  @Input() placa = '';
  @Input() condutor = '';
  @Input() horario = '';
  @Input() id = '';
  valor = 0;
  walletId = '';
  vehicles: Veiculo[] = [];

  private dashboardService = inject(DashboardService);
  private vehiclesService = inject(getVehiclesService);
  private updateGateEvent = inject(UpdateGateEventService)
  dialog = inject(Dialog);

  gateEvent: GateEvent[] = [
  ];

  ngOnInit() {
    this.loadDashboard();
  }

  loadDashboard() {
    this.dashboardService.loadDashboard().subscribe({
      next: (response) => {
        this.valor = response.wallet.props.balance;
        this.walletId = response.wallet.props._id;
        this.gateEvent = response.gateEvent.map((item:any) => {
          const date = new Date(item.gateEvent.props.timestamp);

          const horario = date.toLocaleTimeString('pt-BR', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
          });

          return{
            _id: item.gateEvent.props._id,
            plate: item.vehicle.props.plate,
            name: response.user.props.name,
            timestamp: horario,
          }

        });
      },
      error: (err) => {
        console.error('Erro ao carregar dashboard', err);
      },
    });
  }

  finalizarEstacionamento(dados: string) {
    const payload = {
      id: dados,
      active: false
    };
    this.updateGateEvent.updateGateEvent(payload).subscribe({
      next: () => {
        this.loadDashboard();
      },
      error: (err) => {
        console.error('Erro acionar a entrada', err);
      },
    });
  }

  loadVehicles() {
    this.vehiclesService.loadVehicles().subscribe({
      next: (response) => {
        this.vehicles = response;
      },
      error: (err) => {
        console.error('Erro ao carregar veículos', err);
      },
    });
  }

  openModalVaga() {
    const dialogRef = this.dialog.open(ModalEncontrarVaga, {
      hasBackdrop: true,
      disableClose: true,
    });
    dialogRef.closed.subscribe(() => {
      this.loadDashboard();
    });
  }

  openModalVeiculo() {
    const dialogRef = this.dialog.open(ModalAdicionarVeiculo, {
      hasBackdrop: true,
      disableClose: true,
    });
    dialogRef.closed.subscribe(() => {
      this.loadDashboard();
    });
  }

  saldoRecarga() {
    const dialogRef = this.dialog.open(SaldoRecarga, {
      hasBackdrop: true,
      disableClose: true,
      data: {
        walletId: this.walletId,
      },
    });
    dialogRef.closed.subscribe(() => {
      this.loadDashboard();
    });
  }
}
