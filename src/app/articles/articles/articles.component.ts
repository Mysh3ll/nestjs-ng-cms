import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  articles$ = null;

  constructor(private readonly httpClient: HttpClient) { }

  ngOnInit() {
    this.articles$ = this.httpClient.get<any[]>('http://localhost:3000/articles');
  }

}
