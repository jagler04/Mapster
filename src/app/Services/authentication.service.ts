import { Injectable } from '@angular/core';
import { PubSubService } from './pub-sub.service';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../Pages/login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public AuthToken: string;
  public LoginSkipped: boolean;
  public IsAuthenticated: boolean;
  constructor(private pubsub: PubSubService, private dialog: MatDialog) { }

  public Login(email: string, password: string) {
    this.pubsub.$pub("LoggedIn");
  }
  public Logout(){
    this.pubsub.$pub("LoggedOut");
  }
}
