import { Component, OnInit } from '@angular/core';
import { Person } from '../../models/person.model';
import { MemberService } from '../../services/member.service';

@Component({
  selector: 'app-members-list-page',
  templateUrl: './members-list-page.component.html',
  styleUrls: ['./members-list-page.component.css']
})
export class MembersListPageComponent implements OnInit {

  personList: Array<Person>;

  constructor(private memberService: MemberService) {
    this.getPersonList();
  }

  ngOnInit() {
  }

  getPersonList(): void {
    this.memberService.getPersonList().subscribe(data => this.personList = data);
    // this.news_list = this.newsService.getNewsList();
  }



}
