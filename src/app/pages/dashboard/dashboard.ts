import { Component, inject } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { Dialog, DialogRef } from '@angular/cdk/dialog';
import { ModalComponent } from '../../components/modal/modal';
import { Footer } from "../../components/footer/footer";
import { SaldoRecarga } from '../../components/saldo-recarga/saldo-recarga';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [LucideAngularModule, Footer],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
})
export class Dashboard {

  dialog = inject(Dialog);

  openModal() {
    this.dialog.open(ModalComponent, {
      hasBackdrop: true,
      disableClose: true,
      data: {
        titulo: 'Adicionar Veiculo',
        input1: 'Placa do Veiculo',
        input2: 'Modelo do Veiculo',
        condicao: 'adicionar'
      }
    });
  }

  encontrarVaga() {
    this.dialog.open(ModalComponent, {
      hasBackdrop: true,
      disableClose: true,
      data: {
        titulo: 'Encontrar Vaga',
        input1: '',
        input2: 'valor do segundo input',
        condicao: 'encontrar'
      }
    });
  }

  saldoRecarga(){
    const DialogRef = this.dialog.open(SaldoRecarga, {
      data: {
        titulo: 'Adicionar saldo',
        input1: 'Qual valor que deseja adicionar ?',
        condicao: 'adicionar'
      }
    });


  }

}