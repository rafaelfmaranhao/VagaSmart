import { ApplicationConfig, importProvidersFrom, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { AuthInterceptor } from './services/auth.service';
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
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([AuthInterceptor])),
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
