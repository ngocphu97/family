import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembersRoutingModule } from './members-routing.module';
import { MembersListPageComponent } from './containers/members-list-page/members-list-page.component';
import { MemberDetailPageComponent } from './containers/member-detail-page/member-detail-page.component';
import { MemberService } from './services/member.service';


@NgModule({
  imports: [
    CommonModule,
    MembersRoutingModule
  ],
  declarations: [
    MembersListPageComponent,
    MemberDetailPageComponent,
  ],
  providers: [
    MemberService
  ]
})
export class MembersModule { }
