import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-balance-box',
  templateUrl: './balance-box.component.html',
  styleUrls: ['./balance-box.component.css']
})
export class BalanceBoxComponent implements OnInit {

  @Input() EthBalance: string;
  @Input() EBalance: string;
  @Input() NBalance: string;

  constructor() { }

  ngOnInit() {
    if(this.EBalance === undefined){
      this.EBalance = '';
    }
    if(this.NBalance === undefined){
      this.NBalance = '';
    }
    if(this.EthBalance === undefined){
      this.EthBalance = '';
    }
  }

}
