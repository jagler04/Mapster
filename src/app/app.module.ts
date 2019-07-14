import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AuthenticationService } from './Services/authentication.service';
import { PubSubService } from './Services/pub-sub.service';
import { HttpIntercept } from './http-intercept';
import { LoginComponent } from './Popups/login/login.component';
import { HomeComponent } from './Pages/home/home.component';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule
  ],
  providers: [
    AuthenticationService,
    PubSubService,
    HttpIntercept  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
