import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-article-new',
  templateUrl: './article-new.component.html',
  styleUrls: ['./article-new.component.scss']
})
export class ArticleNewComponent implements OnInit {

  constructor(private readonly formBuilder: FormBuilder) { }

  articleForm: FormGroup = this.formBuilder.group({
    articleTitle: [''],
    articleContent: [''],
  });

  ngOnInit() {
  }

  submit() {
    console.log('article / submit', this.articleForm.value);
  }

}
