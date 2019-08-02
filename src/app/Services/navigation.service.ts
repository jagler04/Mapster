import { Injectable } from '@angular/core';
import { PubSubService } from './pub-sub.service';
import { Router, NavigationEnd, RouterEvent } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private pages: string[] = [];
  public CurrentPage: string;

  constructor(private pubsub: PubSubService, private router: Router) { 
    //this.router.events.subscribe(this.RouterEvents);
  }

  public Push(page: string, param: string = null) {
    console.log("page pushed: " + page);
    this.CurrentPage = page.replace(/([A-Z])/g, ' $1').trim();
    if(this.pages.length == 0){
      this.pages = [page];
    }
    else{
      this.pages.push(page);
    }
    if(param !== null){
      this.router.navigate(["/" + page, param])
    }
    else{
      this.router.navigateByUrl("/" + page);
    }
    
  }
  public Pop(){
    if(this.pages.length > 0){
      this.pages.pop();

      this.router.navigateByUrl("/" + this.pages[this.pages.length - 1]);
    }
    
  }
  // private RouterEvents(currentEvent: RouterEvent) {
  //   if(currentEvent instanceof NavigationEnd) {
  //     this.CurrentPage = currentEvent.url;
  //     this.pubsub.$pub("Navigated",  this.CurrentPage);
  //   }
  // }
}
