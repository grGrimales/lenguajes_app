import { Component, OnInit, Input } from '@angular/core';
import { AlertQuestionService } from './services/alert-question.service';

@Component({
  selector: 'app-alert-question',
  templateUrl: './alert-question.component.html',
  styleUrls: ['./alert-question.component.css']
})
export class AlertQuestionComponent implements OnInit {

  @Input() confirmCallback: Function;
  @Input() cancelCallback: Function;
  @Input() message: string;

  constructor(public modalService: AlertQuestionService) { }

  ngOnInit() { }


  public confirm(): void {
    if (this.confirmCallback) {
      this.confirmCallback();
    }
    this.modalService.hideModal();
  }

  public cancel(): void {
    if (this.cancelCallback) {
      this.cancelCallback();
    }
    this.modalService.hideModal();
  }
}