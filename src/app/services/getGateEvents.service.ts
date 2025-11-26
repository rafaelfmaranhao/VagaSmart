import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', 
})
export class GetGateEventsService {
  private apiUrl = 'http://localhost:3001/gateEvent';

  constructor(private http: HttpClient) {}

  loadGateEvents(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}