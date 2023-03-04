import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertQuestionComponent } from './alert-question.component';
import { AlertQuestionService } from './services/alert-question.service';
import { WordsService } from '../../words/services/words.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AlertQuestionComponent],
  providers: [
    AlertQuestionService,
    WordsService
  ]
})
export class AlertQuestionModule { }
