import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { AlertComponentComponent } from '../alert-component.component';

@Injectable()
export class AlertService {
  private isVisible: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private yesNoResult: Subject<boolean> = new Subject<boolean>();
  constructor() { }


  get isVisible$() {
    return this.isVisible.asObservable();
  }

  get yesNoResult$() {
    return this.yesNoResult.asObservable();
  }

  show() {
    this.isVisible.next(true);
  }

  hide() {
    this.isVisible.next(false);
  }

  showYesNoAlert(message: string) {
    return {
      component: AlertComponentComponent,
      inputs: {
        message: message,
        type: 'yesno'
      },
      onYes: () => {
        this.yesNoResult.next(true);
      },
      onNo: () => {
        this.yesNoResult.next(false);
      }
    };
  }
}
