import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import {FormsModule} from '@angular/forms'

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {
  step = 1;
  

  
}