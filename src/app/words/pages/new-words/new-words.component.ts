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

  imgErrorMsg: string;
  audioErrorMsg: string;

  image: File;
  audio: File;

  isValidForm = true;

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

  async createWord() {
    try {

      this.isValidForm = false;
      let hasError = false;
      let imgError = false;
      let audioError = false;

      const formDataImg = new FormData();
      const formDataAudio = new FormData();

      if (this.newWord.img) {
        const validImgExtensions = ['jpg', 'png', 'jpeg'];
        const imgExtension = this.newWord.img.name.split('.').pop().toLowerCase();
        if (validImgExtensions.includes(imgExtension)) {
          formDataImg.append('img', this.newWord.img);
        } else {
          console.error('La extensión de la imagen no es válida');
          hasError = true;
          imgError = true;
        }
      }

      if (this.newWord.audio) {
        const validAudioExtensions = ['mp3', 'mp4'];
        const audioExtension = this.newWord.audio.name.split('.').pop().toLowerCase();
        if (validAudioExtensions.includes(audioExtension)) {
          formDataAudio.append('audio', this.newWord.audio);
        } else {
          console.error('La extensión del audio no es válida');
          hasError = true;
          audioError = true;
        }
      }

      if (imgError) {
        this.imgErrorMsg = 'La extensión de la imagen no es válida. Solo se permiten archivos con extensiones: jpg, png, jpeg';
      } else {
        this.imgErrorMsg = '';
      }

      if (audioError) {
        this.audioErrorMsg = 'La extensión del audio no es válida. Solo se permiten archivos con extensiones: mp3, mp4';
      } else {
        this.audioErrorMsg = '';
      }

      if (!hasError) {
        const [respImg, respAudio] = await Promise.all([
          this.newWord.img ? from(this._sWords.uploadImg(formDataImg)).toPromise().catch((error) => {
            console.error('Ha ocurrido un error al subir la imagen');
            console.log(error);
            hasError = true;
            //TODO: Manejar el error de la subida de imagen.
            return null;
          }) : Promise.resolve(null),
          this.newWord.audio ? from(this._sWords.uploadAudio(formDataAudio)).toPromise().catch((error) => {
            console.error('Ha ocurrido un error al subir el audio');
            console.log(error);
            hasError = true;
            //TODO: Manejar el error de la subida de audio.
            return null;
          }) : Promise.resolve(null)
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
          this.isValidForm = true;
          return resp;
        }
      }

      this.isValidForm = true;

    } catch (error) {
      console.log(error);
    }
  }



  onImageSelected(event: any): void {
    const file: File = event.target.files[0];
    const allowedExtensions = /(\.jpg|\.jpeg|\.png)$/i;
    if (!allowedExtensions.exec(file.name)) {
      this.imgErrorMsg = 'Seleccione una imagen con formato válido (JPG, JPEG, PNG)';
      this.newWord.img = null;
      this.isValidForm = false;
    } else {
      this.imgErrorMsg = '';
      this.newWord.img = file;
    }
  }

  onAudioSelected(event: any): void {
    const file: File = event.target.files[0];
    const allowedExtensions = /(\.mp3|\.mp4)$/i;
    if (!allowedExtensions.exec(file.name)) {
      this.audioErrorMsg = 'Seleccione un audio con formato válido (MP3, MP4)';
      this.newWord.audio = null;
      this.isValidForm = false;
    } else {
      this.audioErrorMsg = '';
      this.newWord.audio = file;
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