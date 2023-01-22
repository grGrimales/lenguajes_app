import { HttpErrorResponse } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { WordsService } from '../../services/words.service';

@Component({
  selector: 'app-new-words',
  templateUrl: './new-words.component.html',
  styleUrls: ['./new-words.component.css']
})
export class NewWordsComponent implements OnInit {
  addWords: any = {
    word: "",
    wordSpanish: "",
    lenguajes: "",
    level: '',
    category: []
  }
  messageError;
  listCategory: string[] = [];
  category;


  isValidInput = {
    word: {
      isValid: true,
      messagesError: []
    },
    wordSpanish: {
      isValid: true,
      messagesError: []
    },
    lenguajes: {
      isValid: true,
      messagesError: []
    },
    level: {
      isValid: true,
      messagesError: []
    },

  }

  listCategorySugerido;

  constructor(private _sWords: WordsService) { }

  ngOnInit() {

  }

  async handlerAddWords() {

    console.log('gggg')
    this.addWords.category = this.listCategory;
    console.log(this.isValidForm())
    if (this.isValidForm()) {
      (await this._sWords.createWords(this.addWords)).subscribe((resp) => {
        console.log(this.addWords)
      }, (err: HttpErrorResponse) => {

        console.log(err);
      });
    }


    console.log(this.isValidInput)

  }


  addCategory(event) {
    this.listCategory.push(event.target.value);

    event.target.value = ''
    console.log('List catgeory', this.listCategory)
  }

  isValidForm() {

    this.resetIsValidInput();

    let isValid = true;
    isValid =  this. isValidWord()
    // if (!this.addWords.word) {
    //   this.isValidInput.word.isValid = false;
    //   this.isValidInput.word.messagesError.push('Ingrese una palabra por favor.');
    //   isValid = false;
    // }else if(!this.addWords.wordSpanish){
    //   this.isValidInput.wordSpanish.isValid = false;
    //   this.isValidInput.wordSpanish.messagesError.push('Ingrese la tarducción por favor.');
    //   isValid = false;
    // }else if(!this.addWords.lenguajes){
    //   this.isValidInput.lenguajes.isValid = false;
    //   this.isValidInput.lenguajes.messagesError.push('Seleccione un lenguaje por favor.');
    //   isValid = false;
    // }else if(!this.addWords.level){
    //   this.isValidInput.level.isValid = false;
    //   this.isValidInput.level.messagesError.push('Ingrese  un nivel por favor.');
    //   isValid = false;
    // }


    return isValid

  }

  resetIsValidInput() {
    this.isValidInput = {
      word: {
        isValid: true,
        messagesError: []
      },
      wordSpanish: {
        isValid: true,
        messagesError: []
      },
      lenguajes: {
        isValid: true,
        messagesError: []
      },
      level: {
        isValid: true,
        messagesError: []
      },

    }

  }

  isValidWord() {
    if (!this.addWords.word) {
      this.isValidInput.word.isValid = false;
      this.isValidInput.word.messagesError.push('Ingrese una palabra.');
      return false;
    }
    return true;
  }

}
