import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  MatGridListModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule
} from '@angular/material';
import { MatChipsModule } from '@angular/material/chips';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule, MatSlider } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { AppComponent } from './app.component';
import { EthereumComponent } from './ethereum/ethereum.component';
import { BalanceBoxComponent } from './balance-box/balance-box.component';
import { FormsModule } from '../../node_modules/@angular/forms';

const appRoutes: Routes = [
  {
    path: 'home',
    component: AppComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

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
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    HttpClientModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatChipsModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
