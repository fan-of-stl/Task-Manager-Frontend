// login.component.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  formData = {
    username: '',
    password: '',
  };

  loginError: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.login(this.formData).subscribe(
      () => {
        this.router.navigate(['/dashboard']); // Redirect to dashboard or home page after successful login
      },
      (error) => {
        this.loginError = error.error.error; // Assuming the backend sends an error message
      }
    );
  }
}
