import { Component, OnInit, OnDestroy } from '@angular/core';
import { PubSubService } from '../Services/pub-sub.service';
import { AuthenticationService } from '../Services/authentication.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit, OnDestroy {
  private IsAuthenticated: boolean;
  constructor(private pubsub: PubSubService, private authService: AuthenticationService) { }

  ngOnInit() {
    this.pubsub.$sub("LoggedIn").subscribe(this.LoggedIn);
    this.pubsub.$sub("LoggedOut").subscribe(this.LoggedOut);
  }
  ngOnDestroy(){

  }
  private LoggedIn(data: any){
    this.IsAuthenticated = true;
  }
  private LoggedOut(data: any){
    this.IsAuthenticated = false;
  }
}
