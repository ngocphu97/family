import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { CarouselComponent } from './carousel/carousel.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'carousel', component: CarouselComponent },
  {
    path: 'members',
    loadChildren: './members/members.module#MembersModule'
  },
  {
    path: 'news',
    loadChildren: './news/news.module#NewsModule'
  }
];

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})

export class AppRoutingModule { }
