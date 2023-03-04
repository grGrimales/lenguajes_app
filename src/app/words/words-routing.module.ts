import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListWordsComponent } from './pages/list-words/list-words.component';
import { NewWordsComponent } from './pages/new-words/new-words.component';
import { ListenWordsComponent } from '../private/admin/words/pages/listen-words/listen-words.component';
import { GenerateListenWordsComponent } from '../private/admin/words/pages/generate-listen-words/generate-listen-words.component';



const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'list-words', component: ListWordsComponent },
      { path: 'new-words/:id', component: NewWordsComponent },
      { path: 'new-words', component: NewWordsComponent },
      { path: 'generate-listen-to-words', component: GenerateListenWordsComponent },
      { path: 'listen-to-words', component: ListenWordsComponent },

      { path: '**', redirectTo: 'list-words' },


    ]
  }
]
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class WordsRoutingModule { }
