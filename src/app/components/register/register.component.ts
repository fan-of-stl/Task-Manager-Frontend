import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  formData = {
    username: '',
    email: '',
    passwrod: '',
  };

  registrationError?: string;

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.register(this.formData).subscribe(
      () => {
        this.router.navigate(['/login']);
      },
      (error) => {
        this.registrationError = error.error;
      }
    );
  }
}
