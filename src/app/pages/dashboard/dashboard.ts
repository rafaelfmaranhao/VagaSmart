import { ModalEncontrarVaga } from './../../components/modal-encontrar-vaga/modal-encontrar-vaga';
import { Component, inject } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { Dialog} from '@angular/cdk/dialog';
import { Footer } from "../../components/footer/footer";
import { SaldoRecarga } from '../../components/saldo-recarga/saldo-recarga';
import { ModalAdicionarVeiculo } from '../../components/modal-adicionar-veiculo/modal-adicionar-veiculo';



@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [LucideAngularModule, Footer],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
})
export class Dashboard {

  dialog = inject(Dialog);

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