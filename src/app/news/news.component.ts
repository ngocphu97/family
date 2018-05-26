import { Component, OnInit } from '@angular/core';
import { News } from './news';
import { NEWS } from '../mock-news';
import { NewsService } from '../news.service';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  news_list: News[];
  selectedNews: News;

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.getNewsList();
  }

  onSelect(news: News): void {
    this.selectedNews = news;
  }

  getNewsList(): void {
    this.newsService.getNewsList().subscribe(news_list => this.news_list = NEWS);
    // this.news_list = this.newsService.getNewsList();
  }

}
