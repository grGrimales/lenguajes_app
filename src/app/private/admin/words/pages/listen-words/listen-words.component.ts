import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listen-words',
  templateUrl: './listen-words.component.html',
  styleUrls: ['./listen-words.component.css']
})
export class ListenWordsComponent implements OnInit {

  constructor(
    private _router: Router,

  ) { }

  ngOnInit() {

    const generateListenInformation = localStorage.getItem("generateListenInformation");

    if (!generateListenInformation) this._router.navigate(['words/generate-listen-to-words'])

  }

}
