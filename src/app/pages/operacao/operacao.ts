import { Component, Input } from '@angular/core';
import { Card } from "../../components/card/card";
import { LucideAngularModule } from "lucide-angular";

interface cardsInfo {
  nome: string;
  status: string;
  placa: string;
  condutor: string;
  horario: string;
}

@Component({
  selector: 'app-operacao',
  imports: [Card, LucideAngularModule],
  templateUrl: './operacao.html',
  styleUrl: './operacao.css',
})
export class Operacao {
  @Input() nome = '';
  @Input() status = '';
  @Input() placa = '';
  @Input() condutor = '';
  @Input() horario = '';

  cards: cardsInfo[] = [
    {
      nome: 'Honda Civic',
      status: 'Pendente',
      placa: 'JKM-8876',
      condutor: 'Carlos Silva',
      horario: '10:30 AM',
    },
    {
      nome: 'Jeep Commander', 
      status: 'Ativo',
      placa: 'LMP-6543',
      condutor: 'Viviano Medeiros',
      horario: '11:00 AM',
    },
    {
      nome: 'Ford Ka',
      status: 'Pendente',
      placa: 'ASM-7654',
      condutor: 'Ana Paula',
      horario: '11:30 AM',
    }
  ];
}
