import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders, NgModule, Injectable } from '@angular/core';
import { MatGridListModule, MatListModule, MatFormFieldModule, MatInputModule, MatCardModule } from '@angular/material';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { EthereumComponent } from './ethereum/ethereum.component';
import { BalanceBoxComponent } from './balance-box/balance-box.component';

const appRoutes: Routes = [

  {
    path: 'home',
    component: AppComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  declarations: [
    AppComponent,
    EthereumComponent,
    BalanceBoxComponent
  ],
  imports: [
    BrowserModule,
    MatGridListModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    AppComponent,
    EthereumComponent,
    BalanceBoxComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
@NgModule()
export class AppModule { }
