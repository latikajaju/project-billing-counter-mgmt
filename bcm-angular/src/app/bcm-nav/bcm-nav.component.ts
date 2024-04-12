import { Component } from '@angular/core';
import { NavCommunicationService } from '../nav-communication.service';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule, NgIf } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-bcm-nav',
  standalone: true,
  imports: [MatIconModule, NgIf, MatButtonModule, CommonModule],
  templateUrl: './bcm-nav.component.html',
  styleUrl: './bcm-nav.component.scss'
})
export class BcmNavComponent {
  isDrawerOpen : boolean = false
  userName: string = ''

  constructor(
    private navCom : NavCommunicationService,
    private router: Router,
    private userService: UserServiceService
  ) {

  }

  ngOnInit(){
    console.log("hello")
    this.userService.userName$.subscribe(userName => {
      this.userName = userName
    })
    console.log(this.userName)
  }

  onDrawerMenuClicked() {
    this.isDrawerOpen  = !this.isDrawerOpen;
    this.navCom.setDrawerState()
  }

  
  logout(){
    this.router.navigate(['/login'])
  }
}
