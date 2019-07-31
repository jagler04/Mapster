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
import { MatCardModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AreasComponent } from './Pages/areas/areas.component';
import { AddAreaComponent } from './Pages/add-area/add-area.component';
import { AgmCoreModule } from '@agm/core';
import { EntryDialogComponent } from './Popups/entry-dialog/entry-dialog.component';
import { FormsModule } from '@angular/forms';
import { AddMeasurementTypesComponent } from './Pages/add-measurement-types/add-measurement-types.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    HomeComponent,
    AreasComponent,
    AddAreaComponent,
    EntryDialogComponent,
    AddMeasurementTypesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
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
    LoginComponent,
    EntryDialogComponent
  ]
})
export class AppModule { }
