import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule } from 'lucide-angular';
import { UpdateWalletService } from './../../services/updateWallet.service';

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

  private updateWalletService = inject(UpdateWalletService);

  @Output() submitEvent = new EventEmitter<string>();

  onSubmit() {
    this.submitEvent.emit(this.id);
  }
}
