import { Component, OnInit } from '@angular/core';

import { News } from '../../models/news.model';

import { NewsService } from '../../services';
import { NEWS } from '../../models/news-mock';

@Component({
  selector: 'app-news-list-page',
  templateUrl: './news-list-page.component.html',
  styleUrls: ['./news-list-page.component.css']
})
export class NewsListPageComponent implements OnInit {
  news_list: Array<News>;
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

