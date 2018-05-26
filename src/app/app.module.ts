import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { CarouselComponent } from './carousel/carousel.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { MemberComponent } from './member/member.component';
import { MemberDetailsComponent } from './member-details/member-details.component';
import { NewsComponent } from './news/news.component';
import { AppRoutingModule } from './/app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    DashboardComponent,
    NavbarComponent,
    JumbotronComponent,
    MemberComponent,
    MemberDetailsComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Ng2CarouselamosModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
