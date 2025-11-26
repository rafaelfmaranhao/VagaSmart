import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', 
})
export class UpdateWalletService {
  private apiUrl = 'http://localhost:3001/wallet';

  constructor(private http: HttpClient) {}

  updateWallet(payload: { type: string; value: number; walletId: string}): Observable<any> {
    return this.http.put(this.apiUrl, payload);
  }
}