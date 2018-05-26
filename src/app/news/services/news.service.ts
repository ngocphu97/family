import { Injectable } from '@angular/core';
import { News } from '../models/news.model';
import { Observable, of } from 'rxjs';
import { NEWS } from '../models/news-mock';

@Injectable()
export class NewsService {

  constructor() { }

  getNewsList(): Observable<News[]> {
    return of(NEWS);
  }

  getNewsDetail(id: number): Observable<News> {
    const newsDetail = NEWS.find((item) => item.id === id);
    return of(newsDetail);
  }
}
