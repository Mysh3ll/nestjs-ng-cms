import { Component, Input, OnInit } from '@angular/core';
import { Article } from '../../models/article';
import { ArticleService } from "../../admin/article.service";
import { catchError } from "rxjs/operators";
import { throwError } from "rxjs";

@Component({
  selector: 'app-article-summary',
  templateUrl: './article-summary.component.html',
  styleUrls: ['./article-summary.component.scss']
})
export class ArticleSummaryComponent implements OnInit {
  isWaitingForServerResponse: boolean = false;
  error = null;
  @Input() article: Article;

  constructor(private readonly articleService: ArticleService) { }

  ngOnInit() {
  }

  delete(article: Article) {
    this.isWaitingForServerResponse = true;
    this.articleService
      .deleteArticle(article)
      .pipe(
        catchError(
          err => this.handleError(err)
        )
      )
      .subscribe(
        data => {
          this.isWaitingForServerResponse = false;
          this.handleSuccess(data);
        },
        err => {
          this.isWaitingForServerResponse = false;
          this.handleError(err);
        },
      );
  }

  private handleError(error) {
    this.error = error;
    return throwError(this.error);
  }

  private handleSuccess(data) {
    console.log('success', data);
  }
}
