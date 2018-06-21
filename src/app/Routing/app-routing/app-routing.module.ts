import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeDashboardComponent } from '../../Components/home-dashboard/home-dashboard.component';
import { AddEventComponent } from '../../Components/add-event/add-event.component';

const routes: Routes = [
  { path: '', component: HomeDashboardComponent },
  { path: 'home', component: HomeDashboardComponent },
  { path: 'add', component: AddEventComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
