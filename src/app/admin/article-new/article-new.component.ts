import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.scss']
})
export class ArticleNewComponent implements OnInit {
  response$ = null;
  error = null;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly articleService: ArticleService,
  ) {
  }

  articleForm: FormGroup = this.formBuilder.group({
    title: ['', Validators.required],
    content: ['', [Validators.required, Validators.minLength(5)]],
    creationDate: new Date().toISOString(),
  });

  ngOnInit() {
  }

  async submit() {
    console.log('article / submit', this.articleForm.value);
    this.response$ = await this.articleService
      .createArticle(this.articleForm.value)
      .pipe(
        catchError(error => this.error = error)
      )
      .subscribe(res => EMPTY);
  }

  get title() {
    return this.articleForm.get('title');
  }

  get content() {
    return this.articleForm.get('content');
  }

}
