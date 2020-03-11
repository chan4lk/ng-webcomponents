import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
    data: {
      id: 'root'
    }
  },
  {
    path: 'dashboard',
    data: {
      id: 'dashboard'
    },
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {initialNavigation: true, useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
