import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  username: string = '';
  password: string = '';
  isLoading: boolean = false;
  errors: { username?: string; password?: string } = {};

  onSubmit() {
    this.errors = {};

    // Validate username
    if (!this.username.trim()) {
      this.errors.username = 'Username is required';
    } else if (this.username.length < 3) {
      this.errors.username = 'Username must be at least 3 characters';
    }

    // Validate password
    if (!this.password) {
      this.errors.password = 'Password is required';
    } else if (this.password.length < 6) {
      this.errors.password = 'Password must be at least 6 characters';
    }

    // If no errors, proceed with login
    if (Object.keys(this.errors).length === 0) {
      this.isLoading = true;

      // Simulate login process
      setTimeout(() => {
        this.isLoading = false;
        console.log('Login successful!', { username: this.username });
        // Here you would typically call your authentication service
      }, 2000);
    }
  }

  clearError(field: string) {
    delete this.errors[field as keyof typeof this.errors];
  }
}
