import { SignInComponent } from './Authentication/sign-in/sign-in.component';
import { AboutComponent } from './about/about.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './Authentication/sign-up/sign-up.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'signin', component: SignInComponent},
  { path: 'signup', component: SignUpComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
