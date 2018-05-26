import { Component, OnInit, Input } from '@angular/core';
import { News } from '../../models/news.model';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})

export class NewsItemComponent implements OnInit {
  @Input() news: News;

  selectedNews = null;
  constructor() { }
  ngOnInit() {
  }
  onSelect(news) {

  }

}
