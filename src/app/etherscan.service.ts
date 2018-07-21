import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { BalanceCall } from './balanceCall';
import { THIS_EXPR } from '../../node_modules/@angular/compiler/src/output/output_ast';

@Injectable({
  providedIn: 'root'
})
export class EtherscanService {
  apiKey = 'ZZZWRDEJ5FQAHN51WRWTMN348WEICB9468';
  etherplay = '0x895BF7ba386382141a53C65E8aC2b16769F7C811';
  neoplay = '0x72efF9e6d24e9078A87f51e569aD5560bFB3Fd40';

  headers = new HttpHeaders({
    'Content-Type': 'application/json'
  });

  urlToken1 = '';
  urlToken2 = '&address=';
  urlToken3: string = '&tag=latest&apikey=' + this.apiKey;

  supplyUrl1 = '';
  supplyUrl2 = '&apikey=' + this.apiKey;

  callUrl: string;

  constructor(private http: HttpClient) { }

  getBalance(address: string): Observable<BalanceCall> {
    return this.http.get<BalanceCall>(
      `http://api.etherscan.io/api?module=account&action=balance&address=${address}&tag=latest&apikey=${this.apiKey}`,
       { headers: this.headers }
      );
  }

  getTokenBalance(user: string, token: string): Observable<BalanceCall> {
    return this.http.get<BalanceCall>(
      `http://api.etherscan.io/api?module=account&action=tokenbalance&contractaddress=${token}&address=${user}&apikey=${this.apiKey}`,
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
    this.callUrl = `http://api.etherscan.io/api?module=stats&action=tokensupply&contractaddress=${token}&apiKey=${this.apiKey}`;
    return this.http.get<BalanceCall>(this.callUrl, { headers: this.headers});
  }

  getNplaySupply(): Observable<BalanceCall> {
    return this.getTokenSupply(this.neoplay);
  }
}
