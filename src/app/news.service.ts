import { Injectable } from '@angular/core';
import { News } from './news/news';
import { NEWS } from './mock-news';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() { }

  getNewsList(): Observable<News[]> {
    return of(NEWS);
  }
}
