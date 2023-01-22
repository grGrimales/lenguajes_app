import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddFrasesComponent } from './pages/add-frases/add-frases.component';
import { ListFrasesComponent } from './pages/list-frases/list-frases.component';

const routes: Routes = [
  {
    path:'',
    children: [
      {path: 'agregar', component: AddFrasesComponent},
      {path: 'listado', component: ListFrasesComponent},
      {path: '**', redirectTo: 'listado'},


    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FrasesRoutingModule { }
