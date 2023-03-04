import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListWordsComponent } from './words/pages/list-words/list-words.component';
import { NewWordsComponent } from './words/pages/new-words/new-words.component';
import { ListenWordsComponent } from './words/pages/listen-words/listen-words.component';
import { GenerateListenWordsComponent } from './words/pages/generate-listen-words/generate-listen-words.component';




const routes: Routes =[
  {
    path: '',
    children: [
      { path: 'words/list-words', component: ListWordsComponent},
      { path: 'words/new-words', component: NewWordsComponent},
      { path: 'words/generate-listen-to-words', component: GenerateListenWordsComponent },
      { path: 'words/listen-to-words', component: ListenWordsComponent },
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
export class AdminRoutingModule { }
