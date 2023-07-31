import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void { }
  title = 'mini-application';
  events: string[] = [];
  opened: boolean = false;

  constructor(
    private authService: AuthService,
  ) { }

  isLoggedIn(): boolean {
    return this.authService.isLogged();
  }
}
