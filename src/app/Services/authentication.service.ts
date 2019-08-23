import { Injectable } from '@angular/core';
import { PubSubService } from './pub-sub.service';
import { MatDialog } from '@angular/material';
import { LoginComponent } from '../Pages/login/login.component';
import { Client, User } from './mapster.client';

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
}
