import { Injectable } from '@angular/core';
import { PubSubService } from './pub-sub.service';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../Pages/login/login.component';
import { Client, User } from './mapster.client';
import * as jwt_decode from "jwt-decode";


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public AuthToken: string;
  public LoginSkipped: boolean;
  public IsAuthenticated: boolean;
  constructor(private pubsub: PubSubService, private dialog: MatDialog, private backendClient: Client) { }

  login(email: string, password: string) {
    let user = new User({
      email: email,
      password: password
    });

    return this.backendClient.login(user);
  }
  public Logout() {
    this.pubsub.$pub("LoggedOut");
  }


  saveToken(token: string) {
    localStorage.setItem('token', token)
  }
  
  getToken(): string {
    return localStorage.getItem('token');
  }

  public isAuthenticated(): boolean {
    // get the token
    const token = this.getToken();
    return this.tokenNotExpired(token);
  }

  tokenNotExpired(token: string): boolean {
    var decoded = jwt_decode(token);
    console.log(decoded);
    return true;

  }
}
