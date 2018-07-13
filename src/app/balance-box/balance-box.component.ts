import { Component, OnInit, Input } from '@angular/core';
import { EtherscanService } from '../etherscan.service';
import { Observable } from '../../../node_modules/rxjs';
import { BalanceCall } from '../balanceCall';

@Component({
  selector: 'app-balance-box',
  templateUrl: './balance-box.component.html',
  styleUrls: ['./balance-box.component.css']
})
export class BalanceBoxComponent implements OnInit {

  @Input() EthBalance: string;
  @Input() EBalance: string;
  @Input() NBalance: string;
  totalSupply: number;

  constructor(private etherscanService: EtherscanService) { }

  ngOnInit() {
    if (this.EBalance === undefined) {
      this.EBalance = '';
    } else {
    }
    if (this.NBalance === undefined) {
      this.NBalance = '';
    }
    if (this.EthBalance === undefined) {
      this.EthBalance = '';
    }
    this.getTotalSupply(this.etherscanService.getTotalSupply());
  }

  getTotalSupply(observer: Observable<BalanceCall>) {
    observer.subscribe(data => {
      this.totalSupply = Number.parseFloat(data.result) / 10000;
    });
  }
}
