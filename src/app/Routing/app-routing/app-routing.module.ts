import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { HomeDashboardComponent } from '../../Components/home-dashboard/home-dashboard.component';
import { AddEventComponent } from '../../Components/add-event/add-event.component';
import { AuthService } from 'src/app/Services/auth/auth.service';
import { LoginComponent } from '../../Components/login/login.component';
import { FavouriteComponent } from '../../Components/favourite/favourite.component';

const routes: Routes = [
  { path: '', component: HomeDashboardComponent },
  { path: 'home', component: HomeDashboardComponent },
  { path: 'add', component: AddEventComponent },
  { path: 'login', component: LoginComponent },
  { path: 'favourite', component: FavouriteComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { 

  private isLoggedIn: boolean;
  private user_displayName: string;
  private user_email: string;

  constructor(public authService: AuthService, private router: Router) {
    this.authService.afAuth.authState.subscribe((auth) => {
      if (auth == null) {
        // not logged in
        this.isLoggedIn = false;
        this.user_displayName = '';
        this.user_email = '';
        this.router.navigate(['login']);
      } else {
        // logged in
        this.isLoggedIn = true;
        this.user_displayName = auth.displayName;
        this.user_email = auth.email;
        this.router.navigate(['']);
      }
    });
  }

}
