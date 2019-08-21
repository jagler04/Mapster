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

  public login(email: string, password: string) {
    let user = new User({
      email: email,
      password: password
    });

    this.backendClient.login(user).subscribe(x => {
      console.log(x)
    })
    this.pubsub.$pub("LoggedIn");
  }
  public Logout() {
    this.pubsub.$pub("LoggedOut");
  }
}
