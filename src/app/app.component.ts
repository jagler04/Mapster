import { Component, OnInit } from '@angular/core';
import { PubSubService } from './Services/pub-sub.service';
import { NavigationService } from './Services/navigation.service';
declare var device;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Saperr';
  ngOnInit() {
    document.addEventListener("deviceready", function () {
      alert(device.platform);
    }, false);
  }

  constructor(private pubsub: PubSubService, private nav: NavigationService) {
    pubsub.$sub("Add Area Page Active").subscribe(data => {
      var navbr = document.getElementById("nvbar") as HTMLElement;
      navbr.style.display = 'none';
    })
    pubsub.$sub("Add Area Page Deactivated").subscribe(data => {
      var navbr = document.getElementById("nvbar") as HTMLElement;
      navbr.style.display = 'block';
    })
  }


}
