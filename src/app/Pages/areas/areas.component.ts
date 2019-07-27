import { Component, OnInit } from '@angular/core';
import { PubSubService } from 'src/app/Services/pub-sub.service';
import { Router } from '@angular/router';
import { NavigationService } from 'src/app/Services/navigation.service';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.scss']
})
export class AreasComponent implements OnInit {

  constructor(private nav: NavigationService) { }

  ngOnInit() {
  }
  GoToAdd(){
    this.nav.Push("AddArea");
  }

}
