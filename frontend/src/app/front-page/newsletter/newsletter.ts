import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-newsletter',
  imports: [CommonModule, FormsModule],
  templateUrl: './newsletter.html',
  styleUrl: './newsletter.scss',
})
export class Newsletter {
  email = '';

  subscribe() {
    if (this.email) {
      alert(`Thank you for subscribing with ${this.email}!`);
      this.email = '';
    }
  }
}
