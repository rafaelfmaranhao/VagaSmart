import { Component, inject } from '@angular/core';
import { LucideAngularModule } from 'lucide-angular';
import { Dialog } from '@angular/cdk/dialog';
import { ModalComponent } from '../../components/modal/modal';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [LucideAngularModule,],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css'],
})
export class Dashboard {

  dialog = inject(Dialog);

  openModal() {
    this.dialog.open(ModalComponent, {
      hasBackdrop: true,
      disableClose: true
    });
  }

}