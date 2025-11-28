import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners, provideZoneChangeDetection, LOCALE_ID } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { AuthInterceptor } from './services/auth.service';
import { routes } from './app.routes';
import {
  LucideAngularModule,
  Menu,
  Bell,
  DollarSign,
  Wallet,
  Mail,
  Lock,
  Car,
  MapPin,
  User,
  History,
  CreditCard,
  Locate,
  Key,
  Shield,
  Clock,
  CircleCheck,
  CircleX,
  LogOut
} from 'lucide-angular';

registerLocaleData(localePt);

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([AuthInterceptor])),
    { provide: LOCALE_ID, useValue: 'pt-BR' },
    importProvidersFrom(
      LucideAngularModule.pick({
        Menu,
        Bell,
        DollarSign,
        Wallet,
        Mail,
        Lock,
        Car,
        MapPin,
        User,
        History,
        CreditCard,
        Locate,
        Key,
        Shield,
        Clock,
        CircleCheck,
        CircleX,
        LogOut
      })
    ),
  ],
};
