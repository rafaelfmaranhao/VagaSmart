import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: 'app-card',
  imports: [FormsModule, LucideAngularModule],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input() titulo = '';
  @Input() status = '';
  @Input() placa = '';
  @Input() condutor = '';
  @Input() horario = '';
  @Input() id = '';

  razao: string = '';
  

  @Output() acao = new EventEmitter<any>();

  onSubmit(event: SubmitEvent) {
    const botao = (event.submitter as HTMLButtonElement).value;

    this.acao.emit({
      action: botao,
      id: this.id,
      titulo: this.titulo,
      status: this.status,
      placa: this.placa,
      condutor: this.condutor,
      horario: this.horario,
      razao: this.razao
    });
  }
}
