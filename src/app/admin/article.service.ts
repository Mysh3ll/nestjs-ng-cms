import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private readonly httpClient: HttpClient) { }

  createArticle(article) {
    return this.httpClient.post<any>('http://localhost:3000/articles', article);
  }
}
