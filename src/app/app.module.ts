import { BrowserModule } from '@angular/platform-browser';
import { ModuleWithProviders, NgModule, Injectable } from '@angular/core';
import { MatGridListModule, MatListModule, MatFormFieldModule, MatInputModule, MatCardModule } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { MDCTextField } from '@material/textfield';

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
    BrowserModule,
    MatGridListModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    HttpClientModule,
    MDCTextField
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
