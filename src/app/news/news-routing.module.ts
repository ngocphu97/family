import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsListPageComponent, NewsDetailPageComponent } from './containers';

const routes: Routes = [
  {
    path: '',
    component: NewsListPageComponent
  },
  {
    path: ':id',
    component: NewsDetailPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
