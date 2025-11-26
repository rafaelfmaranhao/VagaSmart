import { ModalEncontrarVaga } from './../../components/modal-encontrar-vaga/modal-encontrar-vaga';
import { Component, inject, Input } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { Dialog } from '@angular/cdk/dialog';
import { Footer } from '../../components/footer/footer';
import { SaldoRecarga } from '../../components/saldo-recarga/saldo-recarga';
import { ModalAdicionarVeiculo } from '../../components/modal-adicionar-veiculo/modal-adicionar-veiculo';
import { DashboardService } from '../../services/dashboard.service';
import { GateEvent } from '../../models/gateEvent';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [LucideAngularModule, Footer,],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
})
export class Dashboard {
  valor = 0;
  walletId = ''

  private dashboardService = inject(DashboardService);
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
    }
  ]

  ngOnInit() {
    this.loadDashboard();
  }

  loadDashboard() {
    this.dashboardService.loadDashboard().subscribe({
      next: (response) => {
        this.valor = response.wallet.props.balance;
        this.walletId = response.wallet.props._id;
      },
      error: (err) => {
        console.error('Erro ao carregar dashboard', err);
      },
    });
  }

  openModalVaga() {
    this.dialog.open(ModalEncontrarVaga, {
      hasBackdrop: true,
      disableClose: true,
    });
  }

  openModalVeiculo() {
    this.dialog.open(ModalAdicionarVeiculo, {
      hasBackdrop: true,
      disableClose: true,
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
