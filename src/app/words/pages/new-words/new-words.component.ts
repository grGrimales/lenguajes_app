import { HttpErrorResponse } from '@angular/common/http';
import Swal from 'sweetalert2'
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { WordsService } from '../../services/words.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-new-words',
  templateUrl: './new-words.component.html',
  styleUrls: ['./new-words.component.css']
})
export class NewWordsComponent implements OnInit {
  @ViewChild('formWord') formWord: NgForm
  addWords: any = {
    word: "",
    wordSpanish: "",
    lenguajes: "",
    level: '',
    category: []
  }
  messageError;
  listCategory: any = [];
  listCategorySelected: string[] = [];

  category;

  listCategorySugerido;

  constructor(
    private _sWords: WordsService,
    private _router: Router) { }

  ngOnInit() {
  }

  async handlerAddWords() {

    if (this.formWord.form.status !== 'INVALID') {
      this.addWords.category = this.listCategorySelected;
      (await this._sWords.createWords(this.addWords)).subscribe((resp) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'La palabra fue creada con Éxito',
          showConfirmButton: false,
          timer: 1500
        })
        this._router.navigateByUrl('words/list-words');
      }, (err: HttpErrorResponse) => {

        console.log(err);
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'No se pudo crear la ´palabra' + err,
          showConfirmButton: false,
          timer: 1500
        })
      });
    }




  }

  async CategoriasSugeridas(termino) {

    (await this._sWords.getCategoryById(termino)).subscribe((resp) => {
      this.listCategorySugerido = resp
      console.log(this.listCategorySugerido)
    }, (err: HttpErrorResponse) => {

      console.log(err);
      this.listCategorySugerido = []

    });


  }


  insertCategory(category) {
    this.listCategorySelected.push(category);
    this.listCategorySugerido= []
  }
}