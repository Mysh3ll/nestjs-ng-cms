import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Article } from '../models/article';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  private readonly baseURL = 'http://localhost:3000/articles';
  private readonly httpHeaders = {headers: new HttpHeaders({'Content-type': 'application/json'})};

  constructor(private readonly httpClient: HttpClient) { }

  createArticle(article: Article): Observable<Article> {
    return this.httpClient.post<Article>(this.baseURL, article);
  }

  deleteArticle(article: Article) {
    const fullURL = `${this.baseURL}/${article._id}`;
    return this.httpClient.delete<Article>(fullURL, this.httpHeaders);
  }
}
