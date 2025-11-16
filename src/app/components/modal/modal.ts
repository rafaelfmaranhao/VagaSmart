import { Component, Inject, Input } from '@angular/core';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-modal',
  standalone: true,
  templateUrl: './modal.html',
  styleUrls: ['./modal.css'],  
})
export class ModalComponent {
  @Input() titulo = '';
  @Input() input1 = '';
  @Input() input2 = '';
  @Input() condicao = '';

  constructor(
    public dialogRef: DialogRef,
    @Inject(DIALOG_DATA) public data: any
  ) {
    
    if (data) {
      this.titulo = data.titulo;
      this.input1 = data.input1;
      this.input2 = data.input2;
      this.condicao = data.condicao;
    }
  }

  close() {
    this.dialogRef.close();
  }
}
