import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-card-dashboard',
  imports: [FormsModule, LucideAngularModule],
  templateUrl: './card-dashboard.html',
  styleUrl: './card-dashboard.css',
})
export class CardDashboard {
  @Input() titulo = '';
  @Input() status = '';
  @Input() placa = '';
  @Input() condutor = '';
  @Input() horario = '';
  @Input() id = '';

  @Output() submitEvent = new EventEmitter<string>();

  submit() {
    this.submitEvent.emit(this.id);
  }
}
