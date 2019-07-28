import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AuthenticationService } from './Services/authentication.service';
import { PubSubService } from './Services/pub-sub.service';
import { HttpIntercept } from './http-intercept';
import { LoginComponent } from './Pages/login/login.component';
import { HomeComponent } from './Pages/home/home.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatCardModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AreasComponent } from './Pages/areas/areas.component';
import { AddAreaComponent } from './Pages/add-area/add-area.component';
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    HomeComponent,
    AreasComponent,
    AddAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatCardModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCU2867Rocotglq5fwvzEQnOJI6GqXCmSU',
      libraries: ['places', 'drawing', 'geometry']
    })
  ],
  providers: [
    AuthenticationService,
    PubSubService,
    HttpIntercept
  ],
  bootstrap: [AppComponent],
  entryComponents:[
    LoginComponent
  ]
})
export class AppModule { }
