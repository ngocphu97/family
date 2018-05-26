import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

import { NewsService } from '../../services';
import { News } from '../../models/news.model';

@Component({
  selector: 'app-news-detail-page',
  templateUrl: './news-detail-page.component.html',
  styleUrls: ['./news-detail-page.component.css']
})
export class NewsDetailPageComponent implements OnInit {
  newDetail: News;

  constructor(private newsService: NewsService, private route: ActivatedRoute) {

    this.route.params.subscribe(params => {
      let newsId = params.id;
      if (newsId) {
        newsId = parseInt(newsId, 0);
        this.getNewsDetai(newsId);
      }
    });

  }

  ngOnInit() {
  }

  getNewsDetai(id: number): void {
    this.newsService.getNewsDetail(id).subscribe((data) => {
      this.newDetail = data;
    });
  }

}
