import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UpdateGateEventService {
  private apiUrl = 'http://localhost:3001/gateEvent';

  constructor(private http: HttpClient) {}

  updateGateEvent(payload: {
    id:string;
  }): Observable<any> {
    return this.http.put(this.apiUrl, payload);
  }
}
