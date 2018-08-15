import { Component, OnInit, NgModule } from '@angular/core';
import { EtherscanService } from '../etherscan.service';
import { Observable, of } from 'rxjs';
import { BalanceCall } from '../balanceCall';

export interface BetData {
  odds: string;
  confidence: string;
  winnings: number;
  reroll: number;
}
@Component({
  selector: 'app-neo',
  templateUrl: './neo.component.html',
  styleUrls: ['./neo.component.css']
})
export class NeoComponent implements OnInit {
  ethBalance: number;
  nBalance: number;
  eBalance: number;
  user = '0x2Bb3d296dB6ab738b7a19e110A671Ae97ab4602b';
  value = 1;
  bet = 1;
  fraction: number;

  displayedColumns = ['odds', 'confidence', 'winnings', 'reroll'];
  constructor(private etherscanService: EtherscanService) {}

  ngOnInit() {
    this.getBalance(this.etherscanService.getBalance(this.user));
    this.getNeoplayBalance(this.etherscanService.getNeoplayBalance(this.user));
    this.getEtherplayBalance(this.etherscanService.getEtherplayBalance(this.user));
  }

  getBalance(observer: Observable<BalanceCall>) {
    observer.subscribe(data => (this.ethBalance = Number.parseFloat(data.result) / 10 ** 18));
  }

  getNeoplayBalance(observer: Observable<BalanceCall>) {
    observer.subscribe(data => {
      this.nBalance = Number.parseFloat(data.result);
    });
  }

  getEtherplayBalance(observer: Observable<BalanceCall>) {
    observer.subscribe(data => (this.eBalance = Number.parseFloat(data.result)));
  }
  reduce(fraction: number[]): number[] {
    // This would be quicker if we were looping through primes.
    // Since to determine a prime would take an `additional` 2 calculations,
    // it's more efficient to perform the 2 here on each number
    for (let i = fraction[0]; i > 0; i--) {
      if (0 === fraction[0] % i && 0 === fraction[1] % i) {
        const numerator = fraction[0] / i;
        const denominator = fraction[1] / i;
        return [numerator, denominator];
      }
    }
  }
  getFraction(): string {
    const fracList = this.reduce([this.value, 100]);
    if (this.value >= 50) {
      return fracList[1] + ':' + fracList[0];
    } else {
      return fracList[0] + ':' + fracList[1];
    }
  }
  getConfidence(): string {
    return 'placeholder';
  }
  getWinnigs(): number {
    return (this.bet * 100) / this.value;
  }
  getReroll(): number {
    return 0;
  }
  getBetData(): BetData[] {
    const betData: BetData[] = [
      {
        odds: this.getFraction(),
        confidence: this.getConfidence(),
        winnings: this.getWinnigs(),
        reroll: this.getReroll()
      }
    ];
    return betData;
  }
}
