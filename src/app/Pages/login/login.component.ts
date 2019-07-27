import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import * as M from "../../../assets/js/materialize.min";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit {

  @ViewChild('loginDialog', {static: false})
  dialog: ElementRef;
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
}

}
