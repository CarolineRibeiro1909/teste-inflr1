import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: string;
  

  constructor() {
  }

  public setUsername(username: string) {
    this.user = username;
  }
  
  public getUsername() {
    
    return this.user;

}

}
