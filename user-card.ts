import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.html',
  styleUrl: './user-card.css',
})
export class UserCard {
  @Input() firstName = '';
  @Input() lastName = '';
  @Input() age = 0;
  @Input() OS = '';
}
