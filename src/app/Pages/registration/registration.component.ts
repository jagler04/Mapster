import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { NavigationService } from 'src/app/Services/navigation.service';
import { AuthenticationService } from 'src/app/Services/authentication.service';

@Component({
  selector: 'registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
  companyName: string;

  constructor(private userService: UserService, private nav: NavigationService, private authService: AuthenticationService) { }

  ngOnInit() {
  }

  register() {
    this.userService.register(this.userName, this.email, this.password, this.companyName).subscribe(result => {
      this.nav.Push("login", "resgistration successful");
    }, error => {
      console.log('user already exists');
    })

  }

}
