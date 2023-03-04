import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { NewWordsComponent } from './words/pages/new-words/new-words.component';
import { ListWordsComponent } from './words/pages/list-words/list-words.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WordsService } from '../service/words.service';
import { AlertService } from '../../shared/alert-component/services/alert.service';
import { AlertQuestionService } from '../../shared/alert-question/services/alert-question.service';
import { AlertComponentComponent } from '../../shared/alert-component/alert-component.component';
import { AlertQuestionComponent } from '../../shared/alert-question/alert-question.component';
import { ListenWordsComponent } from './words/pages/listen-words/listen-words.component';
import { GenerateListenWordsComponent } from './words/pages/generate-listen-words/generate-listen-words.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],

  declarations: [
    AlertComponentComponent,
    AlertQuestionComponent,
    NewWordsComponent,
    ListWordsComponent,
    ListenWordsComponent,
    GenerateListenWordsComponent],
  providers: [WordsService, AlertService, AlertQuestionService]
})
export class AdminModule { }
