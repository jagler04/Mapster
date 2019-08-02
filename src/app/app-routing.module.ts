import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { LoginComponent } from './Pages/login/login.component';
import { AreasComponent } from './Pages/areas/areas.component';
import { AddAreaComponent } from './Pages/add-area/add-area.component';
import { MeasurementTypesComponent } from './Pages/measurement-types/measurement-types.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path:'home', component: HomeComponent },
  { path:'Home', component: HomeComponent },
  { path:'login', component: LoginComponent },
  { path:'Areas', component: AreasComponent },
  { path:'areas', component: AreasComponent },
  { path: "AddArea", component: AddAreaComponent },
  { path: "addarea", component: AddAreaComponent },
  { path: "AddMeasurementTypes", component: MeasurementTypesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
