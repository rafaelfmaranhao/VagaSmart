import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { BtnInput } from '../../components/btn-input/btn-input';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, BtnInput, LucideAngularModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email = '';
  password = '';
  errorMessage = '';
  isLoading = true;

  private loginService = inject(LoginService);
  private router = inject(Router);

  onLogin() {
    const credentials = { email: this.email, password: this.password };

    if (!this.email || !this.password) {
      this.errorMessage = 'Preencha todos os campos.';
    }

    this.loginService.login(credentials).subscribe({
      next: (response) => {
        this.isLoading = false
        const token = response.token; 
        const tipoUsuario = response.type;
        this.loginService.setToken(token);

        if (tipoUsuario == 'ALUNO' || tipoUsuario == 'FUNCIONARIO' || tipoUsuario == 'VISITANTE') {
          this.router.navigate(['/dashboard']);
        } else if (tipoUsuario == 'OPERADOR') {
          this.router.navigate(['/operator']);
        }
      },
      error: (err) => {
        console.error('Erro ao fazer login:', err);
        this.errorMessage = 'Credenciais inválidas. Tente novamente.';
      },
    });
  }
}