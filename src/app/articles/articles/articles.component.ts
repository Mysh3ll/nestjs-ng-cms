import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  articles$ = null;

  constructor(private readonly articlesService: ArticlesService) { }

  async ngOnInit() {
    this.findAllArticles();
  }

  async reloadArticles(deletionSuccess: boolean) {
    this.findAllArticles();
  }

  async findAllArticles() {
    this.articles$ = await this.articlesService.findAllArticles();
  }
}
