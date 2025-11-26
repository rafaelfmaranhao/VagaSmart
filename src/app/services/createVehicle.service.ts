import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', 
})
export class CreateVehicleService {
  private apiUrl = 'http://localhost:3001/vehicle';

  constructor(private http: HttpClient) {}

  registerVehicle(payload: { model: string; plate: string;}): Observable<any> {
    return this.http.post(this.apiUrl, payload);
  }
}