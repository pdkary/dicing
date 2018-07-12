import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { BalanceCall } from './balanceCall';

@Injectable({
  providedIn: 'root'
})
export class EtherscanService {
  apiKey = 'ZZZWRDEJ5FQAHN51WRWTMN348WEICB9468';
  etherplay = '0x895bf7ba386382141a53c65e8ac2b16769f7c811';
  neoplay = '0x72eff9e6d24e9078a87f51e569ad5560bfb3fd40';

  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });
  constructor(private http: HttpClient) { }

  getBalance(address: string): Observable<BalanceCall> {
    return this.http.get<BalanceCall>(
      `http://api.etherscan.io/api?module=account
      &action=balance
      &address=${address}
      &tag=latest
      &apikey=${this.apiKey}`, 
      { headers: this.headers }
    );
  }

  getTokenBalance(user: string, token: string): Observable<BalanceCall> {
    return this.http.get<BalanceCall>(
      `https://api.etherscan.io/api?module=account
      &action=tokenbalance
      &contractaddress=${token}
      &address=${user}
      &tag=latest
      &apikey=${this.apiKey}`, 
      { headers: this.headers }
    );
  }

  getNeoplayBalance(user: string): Observable<BalanceCall> {
    return this.getTokenBalance(user, this.neoplay);
  }

  getEtherplayBalance(user: string): Observable<BalanceCall> {
    return this.getTokenBalance(user, this.etherplay);
  }

  getTokenSupply(token: string): Observable<BalanceCall> {
    return this.http.get<BalanceCall>(
      `https://api.etherscan.io/api?module=stats
      &action=tokensupply
      &contractaddress=${token}
      &apikey=${this.apiKey}`, 
      { headers: this.headers }
    );
  }
  getTotalSupply(): Observable<BalanceCall> {
    return this.getTokenSupply(this.neoplay);
  }
}
