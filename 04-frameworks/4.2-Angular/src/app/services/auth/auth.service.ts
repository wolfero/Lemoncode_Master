import { Injectable } from '@angular/core';

interface LoginType {
  username: string | null;
  password: string | null;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = this.isLogged();
  private username: string | null = null;

  constructor() { }

  login({ username, password }: Partial<LoginType>): boolean {
    if (username === 'master8@lemoncode.net' && password === '12345678') {
      this.isAuthenticated = true;
      this.username = username;
      localStorage.setItem('username', username);
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
    this.username = null;
    localStorage.removeItem('username');
  }

  isLogged(): boolean {
    return localStorage.getItem('username') != null;
  }

  getUsername(): string{
    return localStorage.getItem('username')!;
  }

}
