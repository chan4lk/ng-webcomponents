import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MessageCardModule } from '@chan4lk/ch-components';
import { MessagesComponent } from './messages/messages.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data: {
      id: 'home'
    }
  },
  {
    path: 'messages',
    component: MessagesComponent,
    data: {
      id: 'messages'
    }
  },
  {
    path: 'about',
    component: AboutComponent,
    data: {
      id: 'about'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), MessageCardModule],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
