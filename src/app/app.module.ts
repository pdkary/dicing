import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule, Injectable } from '@angular/core';
import { MatGridListModule, MatListModule, MatFormFieldModule, MatInputModule, MatCardModule } from '@angular/material';

import { AppComponent } from './app.component';
import { EthereumComponent } from './ethereum/ethereum.component';
import { BalanceBoxComponent } from './balance-box/balance-box.component';

@NgModule({
  declarations: [
    AppComponent,
    EthereumComponent,
    BalanceBoxComponent,
  ],
  imports: [
    BrowserModule, MatGridListModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
