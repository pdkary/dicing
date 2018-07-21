import { Component, OnInit, NgModule } from '@angular/core';
import { EtherscanService } from '../etherscan.service';
import { Observable, of } from 'rxjs';
import { BalanceCall } from '../balanceCall';
import { NgModel, FormsModule } from '../../../node_modules/@angular/forms';
import { BrowserModule } from '../../../node_modules/@angular/platform-browser';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-ethereum',
  templateUrl: './ethereum.component.html',
  styleUrls: ['./ethereum.component.css']
})
@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
  })
export class EthereumComponent implements OnInit {

  ethBalance: number;
  nBalance: number;
  eBalance: number;
  user = '0x2Bb3d296dB6ab738b7a19e110A671Ae97ab4602b';
  value = 0;
  constructor(private etherscanService: EtherscanService) { }

  ngOnInit() {
    this.getBalance(this.etherscanService.getBalance(this.user));
    this.getNeoplayBalance(this.etherscanService.getNeoplayBalance(this.user));
    this.getEtherplayBalance(this.etherscanService.getEtherplayBalance(this.user));
  }

  getBalance(observer: Observable<BalanceCall>) {
    observer.subscribe(data => this.ethBalance = Number.parseFloat(data.result) / 10 ** 18);
  }

  getNeoplayBalance(observer: Observable<BalanceCall>) {
    observer.subscribe(data => {
      this.nBalance =  Number.parseFloat(data.result);
    });
  }

  getEtherplayBalance(observer: Observable<BalanceCall>) {
    observer.subscribe(data => this.eBalance =  Number.parseFloat(data.result));
  }
}
