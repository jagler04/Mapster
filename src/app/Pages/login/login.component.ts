import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { NavigationService } from 'src/app/Services/navigation.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(public authService: AuthenticationService,  private nav: NavigationService) { }

  ngOnInit() {

  }

  login() {
    console.log('at least made it here')
    this.authService.login(this.email, this.password).subscribe(x => {
      console.log(x["token"])
      this.authService.saveToken(x["token"]);
      this.nav.Push("Areas");

    }, error => console.log(error))
  }

  checkAuth() {
    this.authService.isAuthenticated();
  }


}
