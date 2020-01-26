import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MessageCardModule } from '@chan4lk/ch-components';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), MessageCardModule],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
