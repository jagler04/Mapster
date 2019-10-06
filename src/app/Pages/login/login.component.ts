import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { AuthenticationService } from 'src/app/Services/authentication.service';
import { NavigationService } from 'src/app/Services/navigation.service';
import { ActivatedRoute } from '@angular/router';
import { ToolsService } from 'src/app/Services/tools.service';
import { ConnectionService } from 'src/app/Services/connection.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  constructor(private toolsService: ToolsService, public authService: AuthenticationService,
    private nav: NavigationService, private route: ActivatedRoute, private connService: ConnectionService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      console.log(params)
    });
  }

  login() {
    this.authService.login(this.email, this.password).subscribe(x => {
      this.authService.saveToken(x["token"]);
      this.nav.Push("areas");

    }, error => console.log(error))
  }

  checkAuth() {
    this.connService.hasInternet();
    // this.authService.IsAuthenticated = true;
    // this.authService.LoginSkipped = true;
    // this.nav.Push("areas");
  }

  register() {
    this.nav.Push("registration")
  }


}
