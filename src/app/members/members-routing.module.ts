import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MembersListPageComponent } from './containers/members-list-page/members-list-page.component';
import { MemberDetailPageComponent } from './containers/member-detail-page/member-detail-page.component';

const routes: Routes = [
  {
    path: '',
    component: MembersListPageComponent
  },
  {
    path: 'detail',
    component: MemberDetailPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembersRoutingModule { }
