import { ModalEncontrarVaga } from './../../components/modal-encontrar-vaga/modal-encontrar-vaga';
import { Component, inject, Input } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { Dialog } from '@angular/cdk/dialog';
import { Footer } from '../../components/footer/footer';
import { SaldoRecarga } from '../../components/saldo-recarga/saldo-recarga';
import { ModalAdicionarVeiculo } from '../../components/modal-adicionar-veiculo/modal-adicionar-veiculo';
import { DashboardService } from '../../services/dashboard.service';
import { GateEvent } from '../../models/gateEvent';
import { Card } from "../../components/card/card";
import { CardDashboard } from "../../components/card-dashboard/card-dashboard";
import { getVehiclesService } from '../../services/getVehicles.service';
import { Veiculo } from '../../models/veiculo';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [LucideAngularModule, Footer, CardDashboard],
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
  dialog = inject(Dialog);

  gateEvent: GateEvent[] = [
    {
      _id: "",
      userId: "",
      vehicleId: "",
      type: "",
      timestamp: 0,
      authorized: true,
      operatorId: "",
      reason: "",
      active: true
    },
    {
      _id: "",
      userId: "",
      vehicleId: "",
      type: "",
      timestamp: 0,
      authorized: false,
      operatorId: "",
      reason: "",
      active: false
    }
  ];

  ngOnInit() {
    this.loadDashboard();
    this.loadVehicles();
  }

  loadDashboard() {
    this.dashboardService.loadDashboard().subscribe({
      next: (response) => {
        this.valor = response.wallet.props.balance;
        this.walletId = response.wallet.props._id;
      },
      error: (err) => {
        console.error('Erro ao carregar dashboard', err);
      }
    });
  }

  loadVehicles() {
    this.vehiclesService.loadVehicles().subscribe({
      next: (response) => {
        this.vehicles = response;
      },
      error: (err) => {
        console.error('Erro ao carregar veículos', err);
      }
    });
  }

  openModalVaga() {
    this.dialog.open(ModalEncontrarVaga, {
      hasBackdrop: true,
      disableClose: true,
    });
  }

  openModalVeiculo() {
    const dialogRef = this.dialog.open(ModalAdicionarVeiculo, {
      hasBackdrop: true,
      disableClose: true,
    });
    dialogRef.closed.subscribe(() => {
      this.loadDashboard();
    })
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
