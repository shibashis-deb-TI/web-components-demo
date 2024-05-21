import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @Input() show = false;
  @Output() toggleHomeView = new EventEmitter<boolean>();

  toggleView() {
    this.toggleHomeView.emit(!this.show);
    this.show = !this.show;
  }
}
