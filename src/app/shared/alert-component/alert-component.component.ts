import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert-component.component.html',
  styleUrls: ['./alert-component.component.scss']
})
export class AlertComponentComponent {
  @Input() message: string;
  @Input() type: string;
  public closed: boolean = false;

  onClose() {
    this.closed = true;
  }


}
