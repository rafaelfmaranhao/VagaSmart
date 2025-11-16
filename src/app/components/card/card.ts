import { Component, Input } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";

@Component({
  selector: 'app-card',
  imports: [LucideAngularModule],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  @Input() titulo = '';
  @Input() status = '';
  @Input() placa = '';
  @Input() condutor = '';
  @Input() horario = '';
}
