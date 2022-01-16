import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogged: boolean = true;
  title: string = '';
  apikey: string = '';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    if (!this.authService.isLoggedIn()) {
      this.isLogged = false;
      this.title = 'Login';
    } else {
      this.isLogged = true;
      this.title = 'Logout';
    }
  }

  submit() {
    this.authService.login(this.apikey);
    this.isLogged = true;
  }

  logout() {
    this.authService.logout();
    this.isLogged = false;
    this.title = 'Login';
  }

}
