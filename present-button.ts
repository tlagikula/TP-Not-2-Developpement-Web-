import { Component } from '@angular/core';

@Component({
  selector: 'app-present-button',
  imports: [],
  templateUrl: './present-button.html',
  styleUrl: './present-button.css',
})
export class PresentButton {
  estPresent() {
    addEventListener('click', () => {
      this.status = 'Présent';
    });
    this.status = 'Absent';
  }
}
