import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCommentsComponent } from './components/all-comments/all-comments.component';
import { CommentComponent } from './components/comment/comment.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [AllCommentsComponent, CommentComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      {path: '', component: AllCommentsComponent}
    ])
  ]
})
export class CommentModule { }
