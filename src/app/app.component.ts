import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      'Neoplay',
      this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/neoplay.svg')
    );
    this.matIconRegistry.addSvgIcon('Eth', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/ethIcon.svg'));
    this.matIconRegistry.addSvgIcon('Neo', this.domSanitizer.bypassSecurityTrustResourceUrl('./assets/neo-coin.svg'));
  }
}
