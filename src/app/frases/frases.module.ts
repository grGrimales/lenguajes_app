import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrasesRoutingModule } from './frases-routing.module';
import { ListFrasesComponent } from './pages/list-frases/list-frases.component';
import { AddFrasesComponent } from './pages/add-frases/add-frases.component';
import { FrasesComponent } from './frases.component';

@NgModule({
  imports: [
    CommonModule,
    FrasesRoutingModule
  ],
  declarations: [
    ListFrasesComponent, 
    AddFrasesComponent, 
    FrasesComponent]
})
export class FrasesModule { }
