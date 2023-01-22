import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListWordsComponent } from './pages/list-words/list-words.component';
import { NewWordsComponent } from './pages/new-words/new-words.component';



const routes: Routes =[
  {
    path: '',
    children: [
      { path: 'list-words', component: ListWordsComponent},
      { path: 'new-words', component: NewWordsComponent},
      { path: '**', redirectTo: 'list-words'},


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
