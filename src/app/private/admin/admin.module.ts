import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { NewWordsComponent } from './words/pages/new-words/new-words.component';
import { ListWordsComponent } from './words/pages/list-words/list-words.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  
  declarations: [
    NewWordsComponent, 
    ListWordsComponent]
})
export class AdminModule { }
