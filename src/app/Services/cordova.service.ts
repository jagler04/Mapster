import { Injectable, NgZone } from '@angular/core';
import { fromEvent, BehaviorSubject } from 'rxjs';

function _window(): any {
  // return the global native browser window object
  return window;
}

@Injectable({
  providedIn: 'root'
})
export class CordovaService {

  private resume: BehaviorSubject<boolean>;

  constructor(private zone: NgZone) {
    console.log("Cordova started");
    this.resume = new BehaviorSubject<boolean>(null);
      fromEvent(document, 'resume').subscribe(event => {
         this.zone.run(() => {
            this.onResume();
         });
      });
   }
   get cordova(): any {
     console.log(_window().cordova);
      return _window().cordova;
   }
   get onCordova(): Boolean {
    return !!_window().cordova;
    }
   public onResume(): void {
      this.resume.next(true);
   }
}
