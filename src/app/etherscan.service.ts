import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { BalanceCall } from './balanceCall';

@Injectable({
  providedIn: 'root'
})
export class EtherscanService {
  apiKey: string;
  etherplay: string;
  neoplay: string;

  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  urlEth1 = 'http://api.etherscan.io/api?module=account&action=balance&address=';
  urlEth2: string = '&tag=latest&apikey=' + this.apiKey;

  urlToken1 = 'https://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=';
  urlToken2 = '&address=';
  urlToken3: string = '&tag=latest&apikey=' + this.apiKey;

  supplyUrl1 = 'https://api.etherscan.io/api?module=stats&action=tokensupply&contractaddress=';
  supplyUrl2 = '&apikey=' + this.apiKey;

  constructor(private http: HttpClient) { }

  getBalance(address: string): Observable<BalanceCall> {
    return this.http.get<BalanceCall>(this.urlEth1 + address + this.urlEth2, { headers: this.headers });
  }

  getTokenBalance(user: string, token: string): Observable<BalanceCall> {
    return this.http.get<BalanceCall>(this.urlEth2 + token + this.urlToken2 + user + this.urlToken3, { headers: this.headers });
  }

  getNeoplayBalance(user: string): Observable<BalanceCall> {
    return this.getTokenBalance(user, this.neoplay);
  }

  getEtherplayBalance(user: string): Observable<BalanceCall> {
    return this.getTokenBalance(user, this.etherplay);
  }

  getTokenSupply(token: string): Observable<BalanceCall> {
    return this.http.get<BalanceCall>(this.supplyUrl1 + token + this.supplyUrl2, { headers: this.headers });
  }
}
