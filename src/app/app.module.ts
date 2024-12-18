import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AuthenticationService } from './Services/authentication.service';
import { PubSubService } from './Services/pub-sub.service';
import { HttpIntercept } from './http-intercept';
import { LoginComponent } from './Pages/login/login.component';
import { HomeComponent } from './Pages/home/home.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AreasComponent } from './Pages/areas/areas.component';
import { AddAreaComponent } from './Pages/add-area/add-area.component';
import { AgmCoreModule } from '@agm/core';
import { EntryDialogComponent } from './Popups/entry-dialog/entry-dialog.component';
import { FormsModule } from '@angular/forms';
import { MeasurementTypesComponent } from './Pages/measurement-types/measurement-types.component';
import { AddEditMeasurementTypeDialogComponent } from './Popups/add-edit-measurement-type-dialog/add-edit-measurement-type-dialog.component';
import { SelectionDialogComponent } from './Popups/selection-dialog/selection-dialog.component';
import { AreaMeasurementsComponent } from './Pages/area-measurements/area-measurements.component';
import { AreaMapComponent } from './Pages/area-map/area-map.component';
import { Client, API_BASE_URL, UpdateClient, CreateClient, GetClient, GraphClient } from './Services/mapster.client'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor, JwtInterceptor } from './Services/token.interceptor';
import { GraphComponent } from './Pages/graph/graph.component';
import { GraphControlComponent } from './Controls/graph-control/graph-control.component';
import { ChartsModule } from 'ng2-charts';
import { StorageModule } from '@ngx-pwa/local-storage';
import { RegistrationComponent } from './Pages/registration/registration.component';
import { LoadingComponent } from './Pages/loading/loading.component';
import { GraphFilterComponent } from './Popups/graph-filter/graph-filter.component';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { MatVideoModule } from 'mat-video';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginComponent,
    HomeComponent,
    AreasComponent,
    AddAreaComponent,
    EntryDialogComponent,
    MeasurementTypesComponent,
    AddEditMeasurementTypeDialogComponent,
    SelectionDialogComponent,
    AreaMeasurementsComponent,
    AreaMapComponent,
    GraphComponent,
    GraphControlComponent,
    RegistrationComponent,
    LoadingComponent,
    GraphFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    HttpClientModule,
    ChartsModule,
    MatVideoModule,
    AngularDateTimePickerModule,
    StorageModule.forRoot({
      IDBNoWrap: true,
    }), 
    LeafletModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCU2867Rocotglq5fwvzEQnOJI6GqXCmSU',
      libraries: ['places', 'drawing', 'geometry']
    })
  ],
  providers: [
    AuthenticationService,
    PubSubService,
    Client,
    UpdateClient,
    CreateClient,
    GraphClient,
    GetClient,
    { provide: API_BASE_URL, useValue: "https://localhost:44325" },
    // { provide: API_BASE_URL, useValue: "http://saperr.azurewebsites.net" },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },

    HttpIntercept,

  ],
  bootstrap: [AppComponent],
  entryComponents: [
    LoginComponent,
    EntryDialogComponent,
    AddEditMeasurementTypeDialogComponent,
    SelectionDialogComponent,
    GraphFilterComponent
  ]
})
export class AppModule { }
