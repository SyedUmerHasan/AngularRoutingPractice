import { SignInComponent } from './Authentication/sign-in/sign-in.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
// routerConfig.ts

import { Routes } from '@angular/router';
import { SignUpComponent } from './Authentication/sign-up/sign-up.component';

const appRoutes: Routes = [
  { path: '/',
    component: HomeComponent
  },
  { path: 'signin',
    component: SignInComponent
  },
  { path: 'signup',
    component: SignUpComponent
  },
  { path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  { path: 'dashboard',
    component: DashboardComponent
  },
];
export default appRoutes;
