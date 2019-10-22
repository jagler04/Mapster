import { Injectable } from '@angular/core';
import { PubSubService } from './pub-sub.service';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../Pages/login/login.component';
import { Client, User } from './mapster.client';
import * as jwt_decode from "jwt-decode";
import { StorageMap } from '@ngx-pwa/local-storage';
import { resource } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public AuthToken: string;
  public LoginSkipped: boolean;
  public isPremium: boolean;
  constructor(private pubsub: PubSubService, private dialog: MatDialog, private backendClient: Client, private storageService: StorageMap) { 

    this.storageService.has("SAPERR-LoginSkipped").subscribe(hasValue => {
      if(hasValue){
        this.storageService.get("SAPERR-LoginSkipped").subscribe(r => {
          this.LoginSkipped = (r === "true");
        })
      }
    });
  }

  login(email: string, password: string) {
    let user = new User({
      email: email,
      password: password
    });

    var retrieveToken = this.backendClient.login(user);
    retrieveToken.subscribe(result => {
      var decoded = jwt_decode(result);
      this.isPremium = decoded.premium;
    });
    return retrieveToken;
  }
  public Logout() {
    this.pubsub.$pub("LoggedOut");
  }

  public ContinueWithNoLogin(){
    this.LoginSkipped = true;
    this.storageService.set("SAPERR-LoginSkipped", "true").subscribe(result => {});
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
    if (token == null) {
      return false
    }
    return this.tokenNotExpired(token);
  }

  tokenNotExpired(token: string): boolean {
    var decoded = jwt_decode(token);
    if (Date.now() >= decoded.exp * 1000) {
      return false;
    }
    return true;

  }
}
