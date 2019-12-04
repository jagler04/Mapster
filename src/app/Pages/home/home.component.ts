import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import * as M from "../../../assets/js/materialize.min";
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild('loginDialog', {static: false})
  dialog: ElementRef;
  @ViewChild("loginButton", {static: false})
  btn: ElementRef;

  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    

  }
  ngAfterViewInit() {}
}
