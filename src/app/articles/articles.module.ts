import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesComponent } from './articles/articles.component';
import { HttpClientModule } from '@angular/common/http';
import { ArticleSummaryComponent } from './article-summary/article-summary.component';


@NgModule({
  declarations: [ArticlesComponent, ArticleSummaryComponent],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    HttpClientModule,
  ]
})
export class ArticlesModule { }
