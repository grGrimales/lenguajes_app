import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorPageComponent } from './shared/error-page/error-page.component';



const routes: Routes = [

  //Rutas Públicas
  {
    path:'auth',
    loadChildren: () => import('./public/auth/auth.module').then( m => m.AuthModule)
  },
  {
    path: '404',
    component: ErrorPageComponent
  },
  //Rutas Privadas Admin
  {
    path: 'words',
    loadChildren: () => import('./words/words.module').then( m => m.WordsModule)
  },
  {
    path: 'frases',
    loadChildren: () => import('./frases/frases.module').then( m => m.FrasesModule)
  },
  {
    path: '**',
    redirectTo: '404'
  },
] 

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],

})
export class AppRoutingModule { }
