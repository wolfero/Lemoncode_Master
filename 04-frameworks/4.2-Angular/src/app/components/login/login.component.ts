import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  hide = true;
  loginError: string | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  loginForm = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });

  isLoggedIn(): boolean {
    return this.authService.isLogged();
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const result = this.authService.login(this.loginForm.value);
      if (result) {
        this.router.navigate(['/dashboard']);
      } else {
        this.loginError = 'Invalid username or password.';
      }
    }
  }

  hasLoginError() {
    return this.loginError;
  }
}