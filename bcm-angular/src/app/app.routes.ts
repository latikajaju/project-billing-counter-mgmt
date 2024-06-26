import { Routes } from '@angular/router';
import { BcmLoginComponent } from './bcm-login/bcm-login.component';
import { BcmDashboardComponent } from './bcm-dashboard/bcm-dashboard.component';
import { DASH_ROUTES } from './bcm-dashboard/dash-routes';
import { BcmSignupComponent } from './bcm-signup/bcm-signup.component';

export const routes: Routes = [
    { path: '', loadComponent: ()=>import('./bcm-login/bcm-login.component').then(mod=>mod.BcmLoginComponent) },
    {path: 'login', component:BcmLoginComponent},
    { path:'signup', component:BcmSignupComponent },
    {
        path: 'dashboard', 
        loadComponent: () => import('./bcm-dashboard/bcm-dashboard.component').then(mod=>mod.BcmDashboardComponent),
        loadChildren: () => import('./bcm-dashboard/dash-routes').then(mod=>mod.DASH_ROUTES)
    }
    // {path: '', component:BcmLoginComponent},
    // {path:'dashboard', component:BcmDashboardComponent, children:DASH_ROUTES}

];
