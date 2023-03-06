import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';


import { Router } from '@angular/router';
import { WordsService } from '../../../../service/words.service';
import { AlertQuestionService } from '../../../../../shared/alert-question/services/alert-question.service';

@Component({
  selector: 'app-list-words',
  templateUrl: './list-words.component.html',
  styleUrls: ['./list-words.component.scss']
})
export class ListWordsComponent implements OnInit {

  isVisibleModal = false;
  wordSelected;
  listWords: any = []
  constructor(
    private _sWords: WordsService,
    private _salertQuestionService: AlertQuestionService,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.getListWords();
  }


  async getListWords() {
    (await this._sWords.getWords()).subscribe((resp) => {
      this.listWords = resp;
      this.closeModal();
    }, (err: HttpErrorResponse) => {
      console.log(err);
    });
  }

  get visible() {
    return this._salertQuestionService.visible;
  }


  goToNewWord() {

    this._router.navigate(["admin/words/new-words"]);

  }

  goToEditWord(id: string) {
    this._router.navigate(["admin/words/new-words", id]);


  }



  showModal(word) {
    console.log(word._id);
    this.wordSelected = word;
    this.isVisibleModal = true;
  }

  deleteWord() {
    this._sWords.deleteWord(this.wordSelected._id).subscribe(
      (resp) => {
        console.log("Se ha eliminado correctamente la palabra")
        console.log(resp);
        this.getListWords();

      },
      (error) => {
        console.log("ha ocurrido un error al eliminar la palabra");
        console.log(error);
      }
    )

  }


  closeModal() {

    this.isVisibleModal = false;

  }

  onCancel() {
    // Acciones cuando se hace clic en "No"
    this._salertQuestionService.hideModal();


  }





}
