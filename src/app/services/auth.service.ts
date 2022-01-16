import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  public isLoggedIn(): boolean {
    let apiKey = localStorage.getItem('areawa-token');
    if (apiKey && apiKey.length > 0) {
      return true;
    }
    return false;
  }

  public getApiKey(): any {
    if (this.isLoggedIn()) {
      return localStorage.getItem('areawa-token');
    }
    return null;
  }
  
  public login(apiKey: string): void {
    localStorage.setItem('areawa-token', apiKey);
    window.location.reload();
  }

  public logout(): void {
    localStorage.removeItem('areawa-token');
    this.router.navigate(['/login']);
    window.location.reload();
  }
}
