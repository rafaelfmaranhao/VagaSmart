import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', 
})
export class RegisterService {
  private apiUrl = 'http://localhost:3001/register';

  constructor(private http: HttpClient) {}

  registerUser(payload: { name: string; email: string; password: string; type: string }): Observable<any> {
    return this.http.post(this.apiUrl, payload);
  }
}