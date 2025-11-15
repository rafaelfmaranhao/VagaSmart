import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-btn',
  imports: [RouterLink, CommonModule],
  templateUrl: './btn-input.html',
  styleUrl: './btn-input.css',
})
export class BtnInput {
  @Input() tipo = '';
  @Input() valor = '';
  @Input() link = '';

}
