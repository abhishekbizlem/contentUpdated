import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './features/customer/customer.component';
import { LoginComponent } from './core-services/control/login/login.component';
import { RegistrationComponent } from './core-services/control/registration/registration.component';
import { AuthLoginGuard } from './core-services/guard/authLogin.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [],
    canActivateChild: [],
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'registration', component: RegistrationComponent },
      {
        path: 'customer',
        canActivateChild: [AuthLoginGuard],
        loadChildren: () =>
          import('./features/customer/customer.module').then(
            (m) => m.CustomerModule
          ),
      },
      {
        path: 'admin',
        canActivateChild: [AuthLoginGuard],
        loadChildren: () =>
          import('./admin/admin.module').then((m) => m.AdminModule),
      },
      { path: '', redirectTo: 'login', pathMatch: 'full'},
      // { path: '**', component: LoginComponent ,data:{  name:'shubham' } },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
