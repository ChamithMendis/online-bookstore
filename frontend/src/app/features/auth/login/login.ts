import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  login: string = '';
  password: string = '';
  isLoading: boolean = false;
  errors: { login?: string; password?: string } = {};
  loginForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      login: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.errors = {};
    this.submitted = true;

    // Validate username
    // if (!this.username.trim()) {
    //   this.errors.username = 'Username is required';
    // } else if (this.username.length < 3) {
    //   this.errors.username = 'Username must be at least 3 characters';
    // }

    // Validate password
    // if (!this.password) {
    //   this.errors.password = 'Password is required';
    // } else if (this.password.length < 6) {
    //   this.errors.password = 'Password must be at least 6 characters';
    // }

    if (this.loginForm.get('username')?.errors) {
      this.errors.login = 'User name is required';
    }

    if (this.loginForm.get('password')?.errors) {
      this.errors.password = 'Password is required';
    }

    // If no errors, proceed with login
    const login: Login = this.loginForm.getRawValue();
    if (!this.loginForm.invalid) {
      this.isLoading = true;
      setTimeout(() => {
        this.authService.login(login).subscribe({
          next: (response: any) => {
            this.isLoading = false;
            console.log('Login successful!');
            this.router.navigate(['/welcome-page'], {
              queryParams: { loggedIn: 'true' },
            });
          },
          error: (error: any) => {
            this.isLoading = false;
            console.log('Login failed!', error);
          },
        });
      }, 2000);
    }
  }

  get formControl() {
    return this.loginForm?.controls;
  }

  clearError(field: string) {
    delete this.errors[field as keyof typeof this.errors];
  }
}
