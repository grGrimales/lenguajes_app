import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

import { WordsService } from '../../services/words.service';

@Component({
  selector: 'app-list-words',
  templateUrl: './list-words.component.html',
  styleUrls: ['./list-words.component.css']
})
export class ListWordsComponent implements OnInit {


  listWords: any = []
  constructor(private _sWords: WordsService) { }

  ngOnInit() {
    this.getListWords()
  }


  async getListWords() {
    (await this._sWords.getWords()).subscribe((resp) => {
      console.log(resp)
      this.listWords = resp
    }, (err: HttpErrorResponse) => {

      console.log(err);

    });
  }
}
