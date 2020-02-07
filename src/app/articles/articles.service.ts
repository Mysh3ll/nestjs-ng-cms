import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  constructor(private readonly httpClient: HttpClient) { }

  findAllArticles() {
    return this.httpClient.get<Article[]>('http://localhost:3000/articles');
  }
}
