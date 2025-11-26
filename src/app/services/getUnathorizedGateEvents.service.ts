import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', 
})
export class GetUnathorizedGateEventsService {
  private apiUrl = 'http://localhost:3001/gateEvent/Unathorized';

  constructor(private http: HttpClient) {}

  loadGateEvents(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}