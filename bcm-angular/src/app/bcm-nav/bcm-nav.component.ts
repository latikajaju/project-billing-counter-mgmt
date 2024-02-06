import { Component } from '@angular/core';
import { NavCommunicationService } from '../nav-communication.service';
import { MatIconModule } from '@angular/material/icon';
import { NgIf } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-bcm-nav',
  standalone: true,
  imports: [MatIconModule, NgIf, MatButtonModule],
  templateUrl: './bcm-nav.component.html',
  styleUrl: './bcm-nav.component.scss'
})
export class BcmNavComponent {
  isDrawerOpen : boolean = false
  constructor(
    private navCom : NavCommunicationService
  ) {

  }

  onDrawerMenuClicked() {
    this.isDrawerOpen  = !this.isDrawerOpen;
    this.navCom.setDrawerState()
  }
}
