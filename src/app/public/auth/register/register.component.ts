import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: {};
  constructor(
    private _router: Router,
  ) { }

  ngOnInit() {
  }
  openLogin() {
    this._router.navigate(["log-in"])

    console.log('click')
  }
}
