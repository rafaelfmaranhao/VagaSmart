import { Component, inject, Input } from '@angular/core';
import { Card } from '../../components/card/card';
import { LucideAngularModule } from 'lucide-angular';
import { GetUnathorizedGateEventsService } from '../../services/getUnathorizedGateEvents.service';
import { UpdateUnathorizedGateEventService } from '../../services/updateUnathorizedGateEvent.service';

interface cardsInfo {
  id: string;
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
  @Input() id = '';

  private getUnathorizedGateEventsService = inject(GetUnathorizedGateEventsService);
  private updateUnathorizedGateEventService = inject(UpdateUnathorizedGateEventService);

  cards: cardsInfo[] = [
    {
      id: '100',
      nome: 'Macaco',
      status: 'Ativo',
      placa: 'HSH-3030',
      condutor: 'João da Silva',
      horario: '10:00',
    }
  ];

  quantidadeSolicitacoes = this.cards.length;
  ngOnInit() {
    this.loadUnathorizedGateEvents();
  }

  loadUnathorizedGateEvents() {
    this.getUnathorizedGateEventsService.loadGateEvents().subscribe({
      next: (response) => {
        const result = response.gateEventInfo.map((item: any) => {
          const vehicle = item.vehicle.props;
          const user = item.user.props;
          const event = item.gateEvent.props;

          const date = new Date(event.timestamp);

          const horario = date.toLocaleTimeString('pt-BR', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true,
          });

          return {
            id: event._id,
            nome: vehicle.model,
            status: 'Pendente',
            placa: vehicle.plate,
            condutor: user.name,
            horario: horario,
          };
        });
        this.cards = result;
        this.quantidadeSolicitacoes = this.cards.length;
      },
      error: (err) => {
        console.error('Erro ao carregar dashboard', err);
      },
    });
  }

  receberAcao(dados: any) {
    console.log(dados);

    if (dados.action === 'liberar') {
      const payload = {
        authorized: true,
        active: true,
        id: dados.id,
        reason: dados.razao,
      };
      this.updateUnathorizedGateEventService.updateGateEvent(payload).subscribe({
        next: () => {
          this.loadUnathorizedGateEvents();
        },
        error: (err) => {
          console.error('Erro acionar a entrada', err);
        },
      });
    }

    if (dados.action === 'recusar') {
      const payload = {
        authorized: false,
        active: false,
        id: dados.id,
        reason: dados.razao,
      };
      this.updateUnathorizedGateEventService.updateGateEvent(payload).subscribe({
        next: () => {
          this.loadUnathorizedGateEvents();
        },
        error: (err) => {
          console.error('Erro acionar a entrada', err);
        },
      });
    }
  }
}
