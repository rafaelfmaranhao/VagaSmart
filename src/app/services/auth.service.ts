import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  cadastrar(usuario: { email: string, senha: string }) {
    const emails = JSON.parse(localStorage.getItem('email') || '[]');
    const emailExist = emails.find((u: any) => u.usuario === usuario.email);

    if (emailExist) return { success: true, message: 'Email já cadastrado!'};

    emails.push(usuario);
    localStorage.setItem('usuarios', JSON.stringify(emails));
    return { success: true, message: 'Cadastro realizado com sucesso'}
  }

  login() {}
}
