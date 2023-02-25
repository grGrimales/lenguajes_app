import { HttpErrorResponse } from '@angular/common/http';

import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, NgForm } from '@angular/forms';
import { map, switchMap, catchError } from 'rxjs/operators';
import { WordsService } from '../../services/words.service';
import { Router } from "@angular/router";
import { Observable } from 'rxjs';
import { from } from 'rxjs/observable/from';
import { of } from 'rxjs/observable/of';

@Component({
  selector: 'app-new-words',
  templateUrl: './new-words.component.html',
  styleUrls: ['./new-words.component.css']
})
export class NewWordsComponent implements OnInit {
  @ViewChild('formWord') formWord: NgForm
  newWord: Word = {
    word: "test",
    wordSpanish: "test",
    lenguajes: "test",
    level: 'test',
    category: ["test"]
  }

  messageError;
  listCategory: any = [];
  listCategorySelected: string[] = [];

  image: File;
  audio: File;

  category;

  listCategorySugerido;

  constructor(
    private _sWords: WordsService,
    private _router: Router) { }

  ngOnInit() {
  }


  async uploadImg() {
    const formData = new FormData();

    if (this.newWord.img) {
      formData.append('img', this.newWord.img, this.newWord.img.name);

      this._sWords.uploadImg(formData)
    }

  }





  async createWordWithImg() {
    try {
      let hasError = false;
      if (!this.newWord.img) {
        return;
      }

      const formDataImg = new FormData();
      formDataImg.append('img', this.newWord.img);

      const formDataAudio = new FormData();
      if (this.newWord.audio) {
        formDataAudio.append('audio', this.newWord.audio);
      }

      const [respImg, respAudio] = await Promise.all([
        from(this._sWords.uploadImg(formDataImg)).toPromise().catch((error) => {
          console.error('Ha ocurrido un error al subir la imagen');
          console.log(error);
          hasError = true;
          //TODO: Manejar el error de la subida de imagen.
          return null;
        }),
        from(this._sWords.uploadAudio(formDataAudio)).toPromise().catch((error) => {
          console.error('Ha ocurrido un error al subir el audio');
          console.log(error);
          hasError = true;
          //TODO: Manejar el error de la subida de audio.
          return null;
        })
      ]);

      if (respImg) {
        console.log('La imagen se ha subido correctamente');
        console.log(respImg.img_url);
        this.newWord.img = respImg.img_url;
      }

      if (respAudio) {
        console.log('El audio se ha subido correctamente');
        console.log(respAudio.audio_url);
        this.newWord.audio = respAudio.audio_url;
      }

      if (!hasError) {
        const resp = await this._sWords.createWord(this.newWord).toPromise();
        console.log('La palabra se ha creado correctamente');
        console.log(resp);
        return resp;
      }

    } catch (error) {
      console.log(error);
    }
  }


  onImageSelected(event: any): void {
    const file: File = event.target.files[0];
    this.newWord.img = file;
  }

  onAudioSelected(event: any): void {
    const file: File = event.target.files[0];
    this.newWord.audio = file;
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
    this.listCategorySugerido = []
  }
}

export interface Word {
  word: string;
  wordSpanish: string;
  lenguajes: string;
  category: string[] | string;
  img?: File;
  audio?: File;
  level: string;
}