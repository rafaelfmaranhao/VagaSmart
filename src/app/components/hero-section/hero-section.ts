import { Component } from '@angular/core';
import { LucideAngularModule } from "lucide-angular";
import { CallToAction } from '../call-to-action/call-to-action';
import { Footer } from "../footer/footer";

@Component({
  selector: 'app-hero-section',
  imports: [LucideAngularModule, CallToAction, Footer],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
})
export class HeroSection {

}
