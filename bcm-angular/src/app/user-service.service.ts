import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private userNameSubject = new BehaviorSubject<string>('');
  userName$ = this.userNameSubject.asObservable();

  setUserName(userName: string){
    console.log(this.userNameSubject.next(userName))
    this.userNameSubject.next(userName)
  }

  getUserName(): string {
    console.log(this.userNameSubject.getValue())
    return this.userNameSubject.getValue();
  }

  constructor() { }
}
