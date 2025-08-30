import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  username: string = '';
  password: string = '';
  isLoading: boolean = false;
  errors: {
    firstName?: string;
    lastName?: string;
    email?: string;
    username?: string;
    password?: string;
  } = {};

  onSubmit() {
    this.errors = {};

    // Validate first name
    if (!this.firstName.trim()) {
      this.errors.firstName = 'First name is required';
    } else if (this.firstName.length < 2) {
      this.errors.firstName = 'First name must be at least 2 characters';
    }

    // Validate last name
    if (!this.lastName.trim()) {
      this.errors.lastName = 'Last name is required';
    } else if (this.lastName.length < 2) {
      this.errors.lastName = 'Last name must be at least 2 characters';
    }

    // Validate email
    if (!this.email.trim()) {
      this.errors.email = 'Email is required';
    } else if (!this.isValidEmail(this.email)) {
      this.errors.email = 'Please enter a valid email address';
    }

    // Validate username
    if (!this.username.trim()) {
      this.errors.username = 'Username is required';
    } else if (this.username.length < 3) {
      this.errors.username = 'Username must be at least 3 characters';
    } else if (!/^[a-zA-Z0-9_]+$/.test(this.username)) {
      this.errors.username = 'Username can only contain letters, numbers, and underscores';
    }

    // Validate password
    if (!this.password) {
      this.errors.password = 'Password is required';
    } else if (this.password.length < 8) {
      this.errors.password = 'Password must be at least 8 characters';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(this.password)) {
      this.errors.password = 'Password must contain uppercase, lowercase, and number';
    }

    // If no errors, proceed with registration
    if (Object.keys(this.errors).length === 0) {
      this.isLoading = true;

      // Simulate registration process
      setTimeout(() => {
        this.isLoading = false;
        console.log('Registration successful!', {
          firstName: this.firstName,
          lastName: this.lastName,
          email: this.email,
          username: this.username,
        });
        // Here you would typically call your registration service
      }, 2500);
    }
  }

  clearError(field: string) {
    delete this.errors[field as keyof typeof this.errors];
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
