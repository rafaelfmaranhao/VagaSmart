import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule } from 'lucide-angular';
import { BtnInput } from "../../components/btn-input/btn-input";

@Component({
  selector: 'app-login',
  imports: [RouterLink, LucideAngularModule, BtnInput],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

}
