import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatAutocompleteModule, MatFormFieldModule, MatInputModule, MatStepperModule, MatNativeDateModule} from '@angular/material';
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
import {AngularFireModule} from 'angularfire2';
import {AngularFireAuth} from 'angularfire2/auth';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AuthService } from './Services/auth/auth.service';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { LoginComponent } from './Components/login/login.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { BannerComponent } from './Components/banner/banner.component';
import { EventService } from './Services/event/event.service';
import { TagService } from './Services/tag/tag.service';
import { FavouriteComponent } from './Components/favourite/favourite.component';
import { FindComponent } from './Components/find/find.component';


export const firebaseConfig = {
  apiKey: 'AIzaSyDGJG6xRGqfInK8uzNqDswP-EA40aA_8oQ',
  authDomain: 'eventhub-d00b1.firebaseapp.com',
  databaseURL: 'https://eventhub-d00b1.firebaseio.com',
  projectId: 'eventhub-d00b1',
  storageBucket: 'eventhub-d00b1.appspot.com',
  messagingSenderId: '693037729779'
};


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeDashboardComponent,
    AddEventComponent,
    LoginComponent,
    BannerComponent,
    FavouriteComponent,
    FindComponent

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
    MatAutocompleteModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [AngularFireAuth, AuthService, EventService, TagService],
  bootstrap: [AppComponent]
})
export class AppModule { }
