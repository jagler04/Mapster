import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { AreasComponent } from './Pages/areas/areas.component';
import { AddAreaComponent } from './Pages/add-area/add-area.component';
import { MeasurementTypesComponent } from './Pages/measurement-types/measurement-types.component';
import { AreaMeasurementsComponent } from './Pages/area-measurements/area-measurements.component';
import { AreaMapComponent } from './Pages/area-map/area-map.component';
import { GraphComponent } from './Pages/graph/graph.component';
import { RegistrationComponent } from './Pages/registration/registration.component';
import { LoadingComponent } from './Pages/loading/loading.component';

const routes: Routes = [
  { path: '', redirectTo: 'loading', pathMatch: 'full' },
  { path:'home', component: HomeComponent },
  { path:'registration', component: RegistrationComponent },
  { path:'areas', component: AreasComponent },
  { path: "addArea", component: AddAreaComponent },
  { path: "addMeasurementTypes", component: MeasurementTypesComponent },
  { path: "areaMeasurements/:id", component: AreaMeasurementsComponent },
  { path: "areaMap/:id", component: AreaMapComponent },
  { path: "graphs/:id", component: GraphComponent },
  { path: "graphs", component: GraphComponent },
  { path: "loading", component: LoadingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
