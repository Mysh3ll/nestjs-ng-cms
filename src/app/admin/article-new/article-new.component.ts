import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.scss']
})
export class ArticleNewComponent implements OnInit {
  response$ = null;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly articleService: ArticleService,
  ) {
  }

  articleForm: FormGroup = this.formBuilder.group({
    title: [''],
    content: [''],
  });

  ngOnInit() {
  }

  async submit() {
    console.log('article / submit', this.articleForm.value);
    this.response$ = await this.articleService
      .createArticle(this.articleForm.value)
      .subscribe(
        res => console.log(res)
      );
  }

}
