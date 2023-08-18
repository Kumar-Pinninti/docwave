import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated!: boolean;

  constructor(private router: Router) { }


  login(email: string, password: string): void {
    if (email === 'kumar@gmail.com' && password === 'Kumar@1') {
      const token = this.generateToken(email, password);
      localStorage.setItem('DocWave', token);

      this.isAuthenticated = this.isAuth();

      if(this.isAuthenticated) {
        this.router.navigate(['/dashboard']);
      }

    }
  }

  isAuth(): boolean {
    const token = localStorage.getItem('DocWave');
    if (token) {
      return true;
    } else {
      return false;
    }
  }
  
  logout(): void {
    localStorage.removeItem('DocWave');
    this.isAuthenticated = false;
    this.router.navigate(['/login']);
  }

  private generateToken(email: string, password: string): string {
    const random = Math.floor(Math.random() * 10000);
    return `${email}-${random}-${password}`;
  }
}
