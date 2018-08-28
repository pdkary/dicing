import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatDividerModule,
  MatFormFieldModule,
  MatGridListModule,
  MatInputModule,
  MatListModule,
  MatTabsModule
} from '@angular/material';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes } from '@angular/router';
import { FormsModule } from '../../node_modules/@angular/forms';
import { AppComponent } from './app.component';
import { BalanceBoxComponent } from './balance-box/balance-box.component';
import { EthereumComponent } from './ethereum/ethereum.component';
import { NeoComponent } from './neo/neo.component';
import { HomeComponent } from './home/home.component';

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
  declarations: [AppComponent, EthereumComponent, BalanceBoxComponent, NeoComponent, HomeComponent],
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
    MatCheckboxModule,
    MatTableModule,
    MatListModule,
    MatDividerModule,
    MatTabsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
