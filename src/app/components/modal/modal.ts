import { Component, inject } from '@angular/core';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.html',
  styleUrls: ['./modal.css'],  
})
export class ModalComponent {

  dialogRef = inject(DialogRef);

  close() {
    this.dialogRef.close();
  }
}

export class Modal {

}
