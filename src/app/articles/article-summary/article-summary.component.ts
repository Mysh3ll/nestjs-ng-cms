import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../models/article';

@Component({
  selector: 'app-article-summary',
  templateUrl: './article-summary.component.html',
  styleUrls: ['./article-summary.component.scss']
})
export class ArticleSummaryComponent implements OnInit {
  @Input() article: Article;

  constructor() { }

  ngOnInit() {
  }

}
