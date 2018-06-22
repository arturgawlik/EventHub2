import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule, MatFormFieldModule, MatInputModule, MatStepperModule} from '@angular/material';
import { AgmCoreModule } from '@agm/core';
import {MatChipsModule} from '@angular/material/chips';


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './Components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule } from '@angular/material';
import { HomeDashboardComponent } from './Components/home-dashboard/home-dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './Routing/app-routing/app-routing.module';
import { AddEventComponent } from './Components/add-event/add-event.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeDashboardComponent,
    AddEventComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAFSI2KquMn0K9Yh0GhsOT0x-_m7R8lCJ8'
    }),
    MatChipsModule,
    MatAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
