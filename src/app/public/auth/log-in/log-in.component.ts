import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  user: {}= {
    password:  '',
    email:''
  };

  constructor(
    private _router: Router,

  ) { 
  }

  ngOnInit() {
  }

  handlerLogin(){
    console.log('click')
  }
  openRegister() {
    this._router.navigate(["register"])
  }
}
