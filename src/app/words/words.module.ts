import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordsPagesComponent } from './pages/words-pages/words-pages.component';
import { ListWordsComponent } from './pages/list-words/list-words.component';
import { NewWordsComponent } from './pages/new-words/new-words.component';
import { WordsRoutingModule } from './words-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { WordsService } from './services/words.service';


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
    ListWordsComponent,
    NewWordsComponent],
  providers: [WordsService]
})
export class WordsModule { }
