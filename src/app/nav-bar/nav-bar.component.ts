import { Component, OnInit, OnDestroy, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { PubSubService } from '../Services/pub-sub.service';
import { AuthenticationService } from '../Services/authentication.service';
import { Router } from '@angular/router';
import { NavigationService } from '../Services/navigation.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit, OnDestroy {
  @ViewChild("areaButton", {static: false})
  btnArea: ElementRef;
  
  public IsAuthenticated: boolean = true;
  
  constructor(private pubsub: PubSubService, private authService: AuthenticationService,
    private nav: NavigationService, private renderer: Renderer2) { }

  ngOnInit() {
    this.pubsub.$sub("LoggedIn").subscribe(this.LoggedIn);
    this.pubsub.$sub("LoggedOut").subscribe(this.LoggedOut);
    this.pubsub.$sub("Navigated").subscribe(this.Navigated);
    this.IsAuthenticated = true;
  }

  ngOnDestroy(){

  }
  private LoggedIn(data: any){
    this.IsAuthenticated = true;
  }
  private LoggedOut(data: any){
    this.IsAuthenticated = false;
  }
  private Navigated(page: string){
    console.log("navbar navigated page: " + page);
    
    switch(page){
      case "AddArea":
        break;
      default:
        break;
    }
  }
  GoToPage(page: string){
    var sideNavOverlay = document.getElementsByClassName('sidenav-overlay')[0] as HTMLElement;
    sideNavOverlay.click();
    
    this.nav.Push(page);
  }
  
}
