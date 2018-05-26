import { Component, OnInit } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { JumbotronComponent } from '../jumbotron/jumbotron.component';
import { MemberComponent } from '../member/member.component';
import { NewsComponent } from '../news/news.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
