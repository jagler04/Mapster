import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
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
  private IsAuthenticated: boolean = true;
  private IsAddingArea: boolean = false;
  constructor(private pubsub: PubSubService, private authService: AuthenticationService,
    private nav: NavigationService) { }

  ngOnInit() {
    this.pubsub.$sub("LoggedIn").subscribe(this.LoggedIn);
    this.pubsub.$sub("LoggedOut").subscribe(this.LoggedOut);
    this.pubsub.$sub("Navigated").subscribe(this.Navigated);
    //this.pubsub.$sub("Add Area Page Active").subscribe(this.OnAddAreaPage);
    this.IsAddingArea = false;
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
    console.log("navbar navigated IsAddingArea: " + this.IsAddingArea);
    
    switch(page){
      case "AddArea":
        this.IsAddingArea = true;
        break;
      default:
        this.IsAddingArea = false;
        break;
    }
  }
  GoToPage(page: string){
    var sideNavOverlay = document.getElementsByClassName('sidenav-overlay')[0] as HTMLElement;
    sideNavOverlay.click();
    
    this.nav.Push(page);
  }
  CanShowRegular(): boolean{
    console.log("IsAddingArea:" + this.IsAddingArea);
    if(this.IsAddingArea){
      return false;
    }
    return true;
  }
  CanShowAddArea(){
    console.log("IsAddingArea:" + this.IsAddingArea);
    if(this.IsAddingArea){
      return true;
    }
    return false;
  }
  OnAddAreaPage(OnAddAreaPage: any) {
    this.IsAddingArea = true;
  }
}
