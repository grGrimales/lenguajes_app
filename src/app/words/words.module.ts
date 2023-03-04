import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordsPagesComponent } from './pages/words-pages/words-pages.component';
import { ListWordsComponent } from './pages/list-words/list-words.component';
import { NewWordsComponent } from './pages/new-words/new-words.component';
import { WordsRoutingModule } from './words-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WordsService } from './services/words.service';
import { AlertService } from '../shared/alert-component/services/alert.service';
import { AlertComponentComponent } from '../shared/alert-component/alert-component.component';
import { AlertQuestionService } from '../shared/alert-question/services/alert-question.service';
import { AlertQuestionComponent } from '../shared/alert-question/alert-question.component';
import { ListenWordsComponent } from './pages/listen-words/listen-words.component';
import { GenerateListenWordsComponent } from './pages/generate-listen-words/generate-listen-words.component';


@NgModule({
  imports: [
    CommonModule,
    WordsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  declarations: [
    WordsPagesComponent,
    AlertComponentComponent,
    AlertQuestionComponent,
    ListWordsComponent,
    NewWordsComponent,
    ListenWordsComponent,
    GenerateListenWordsComponent],
  providers: [WordsService, AlertService, AlertQuestionService]
})
export class WordsModule { }
