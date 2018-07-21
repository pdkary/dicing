import { Component, OnInit, Input } from '@angular/core';
import { EtherscanService } from '../etherscan.service';
import { Observable } from '../../../node_modules/rxjs';
import { BalanceCall } from '../balanceCall';
import { THIS_EXPR } from '../../../node_modules/@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-balance-box',
  templateUrl: './balance-box.component.html',
  styleUrls: ['./balance-box.component.css']
})
export class BalanceBoxComponent implements OnInit {

  @Input() EthBalance: number;
  @Input() EBalance: number;
  @Input() NBalance: number;
  totalSupply: number;

  constructor(private etherscanService: EtherscanService) { }

  ngOnInit() {
    this.getTotalSupply(this.etherscanService.getTotalSupply());
  }

  getTotalSupply(observer: Observable<BalanceCall>) {
    observer.subscribe(data => {
      this.totalSupply = Number.parseFloat(data.result) / 10000;
    });
  }
}
