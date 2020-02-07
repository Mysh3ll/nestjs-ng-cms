import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../models/article';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private readonly httpClient: HttpClient) { }

  createArticle(article: Article): Observable<Article> {
    return this.httpClient.post<Article>('http://localhost:3000/articles', article);
  }
}
