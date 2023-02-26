import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';




const routes: Routes =[
  {
    path: '',
    children: [
      // { path: 'list-words', component: ListWordsComponent},
      // { path: 'new-words', component: NewWordsComponent},
      // { path: '**', redirectTo: 'list-words'},


    ]
  }
]
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class UserRoutingModule { }
