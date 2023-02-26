import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class AlertQuestionService {

  private modalVisible = false;

  showModal() {

    this.modalVisible = true;
  }

  hideModal() {
    this.modalVisible = false;
  }

  get visible() {
    return this.modalVisible;
  }

}
