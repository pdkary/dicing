import { Component, OnInit } from '@angular/core';
import { EtherscanService } from '../etherscan.service';
import { Observable, of } from 'rxjs';
import { BalanceCall } from '../balanceCall'; 
import { MDCTextField } from '@material/textfield';

const textField = new MDCTextField(document.querySelector('.mdc-text-field'));

@Component({
  selector: 'app-ethereum',
  templateUrl: './ethereum.component.html',
  styleUrls: ['./ethereum.component.css']
})
export class EthereumComponent implements OnInit {

  ethBalance: string;
  nBalance: string;
  eBalance: string;
  constructor(private etherscanService: EtherscanService) { }

  ngOnInit() {
  }

  getBalance(observer: Observable<BalanceCall>) {
    observer.subscribe(data => this.ethBalance = data.result);
  }

  getNeoplayBalance(observer: Observable<BalanceCall>) {
    observer.subscribe(data => this.nBalance = data.result);
  }

  getEtherplayBalance(observer: Observable<BalanceCall>) {
    observer.subscribe(data => this.eBalance = data.result);
  }
}
