import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { MessageService } from '../../../shared/services/message.service';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
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
  registerForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private messageService: MessageService
  ) {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.errors = {};
    this.submitted = true;

    // Validate first name
    if (this.registerForm.get('firstName')?.errors) {
      this.errors.firstName = 'First name is required';
    }
    // else if (this.firstName.length < 2) {
    //   this.errors.firstName = 'First name must be at least 2 characters';
    // }

    // Validate last name
    if (this.registerForm.get('lastName')?.errors) {
      this.errors.lastName = 'Last name is required';
    }
    // else if (this.lastName.length < 2) {
    //   this.errors.lastName = 'Last name must be at least 2 characters';
    // }

    // Validate email
    if (this.registerForm.get('email')?.errors) {
      this.errors.email = 'Email is required';
    }
    // else if (!this.isValidEmail(this.email)) {
    //   this.errors.email = 'Please enter a valid email address';
    // }

    // Validate username
    if (this.registerForm.get('username')?.errors) {
      this.errors.username = 'Username is required';
    }
    // else if (this.username.length < 3) {
    //   this.errors.username = 'Username must be at least 3 characters';
    // } else if (!/^[a-zA-Z0-9_]+$/.test(this.username)) {
    //   this.errors.username = 'Username can only contain letters, numbers, and underscores';
    // }

    // Validate password
    if (this.registerForm.get('password')?.errors) {
      this.errors.password = 'Password is required';
    }
    // else if (this.password.length < 8) {
    //   this.errors.password = 'Password must be at least 8 characters';
    // } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(this.password)) {
    //   this.errors.password = 'Password must contain uppercase, lowercase, and number';
    // }

    // If no errors, proceed with registration
    if (!this.registerForm.invalid) {
      this.isLoading = true;

      try {
        // Registration service call
        const user: User = this.registerForm.getRawValue();

        this.authService.register(user).subscribe({
          next: (response) => {
            this.messageService.showSuccess('Successfully Registered!');

            setTimeout(() => {
              this.isLoading = false;
              console.log('Registration successful!');
              this.router.navigate(['/authentication/login'], {
                queryParams: { registered: 'true' },
              });
            }, 1000);
          },
          error: (error) => {
            this.isLoading = false;
            console.log('Registration failed!');
            this.messageService.showError('Registration failed!. Please try again');
          },
        });
      } catch (error) {
        this.isLoading = false;
        this.messageService.showError('Registration failed!. Please try again');
      }
    }
  }

  get formControl() {
    return this.registerForm?.controls;
  }

  clearError(field: string) {
    delete this.errors[field as keyof typeof this.errors];
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
