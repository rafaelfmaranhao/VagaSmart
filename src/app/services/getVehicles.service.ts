import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class getVehiclesService {
  private apiUrl = 'http://localhost:3001/vehicle';

  constructor(private http: HttpClient) {}

  loadVehicles(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

}
