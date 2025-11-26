import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', 
})
export class CreateGateEventService {
  private apiUrl = 'http://localhost:3001/gateEvent';

  constructor(private http: HttpClient) {}

  registerGateEvent(payload: { idVehicle: string, type: string}): Observable<any> {
    return this.http.post(this.apiUrl, payload);
  }
}