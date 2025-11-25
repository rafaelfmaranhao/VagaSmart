import { Component, Input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LucideAngularModule } from "lucide-angular";
import { BtnInput } from "../../components/btn-input/btn-input";


@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [FormsModule, LucideAngularModule, BtnInput, RouterLink],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})


export class Cadastro {
  @Input() link = '';

  step = signal(1);

  name = signal('');
  email = signal('');
  senha = signal('');
  confirmasenha = signal('');
  tipoUsuario = signal('');

  erroStep1 = signal('');
  erroStep2 = signal('');
  erroStep3 = signal('');


  nextStep1() {
    this.erroStep1.set('');

    if (!this.name() && !this.email()) {
      this.erroStep1.set("Preencha todos os campos!");
      return;
    }

    this.step.set(2);
  }


  nextStep2() {
    this.erroStep2.set('');

    if (this.senha().length < 8) {
      this.erroStep2.set("A senha precisa ter pelo menos 8 caracteres.");
      return;
    }

    if (this.senha() !== this.confirmasenha()) {
      this.erroStep2.set("As senhas não coincidem!");
      return;
    }

    this.step.set(3);
  }


  back() {
    this.step.update(s => s - 1);
  }


  finish() {
    this.erroStep3.set('');


    const dados = {
      name: this.name(),
      email: this.email()
    };

    localStorage.setItem('cadastro', JSON.stringify(dados));

    this.step.set(1);
    this.name.set('');
    this.email.set('');
    this.senha.set('');
    this.confirmasenha.set('');
  }
}
