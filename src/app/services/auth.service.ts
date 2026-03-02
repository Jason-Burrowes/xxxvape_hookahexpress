import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  public isLoggedIn$: Observable<boolean> = this.isLoggedInSubject.asObservable();
  private currentUser: string | null = null;

  constructor() {
    // Check if user is logged in from localStorage
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      this.currentUser = savedUser;
      this.isLoggedInSubject.next(true);
    }
  }

  login(username: string, password: string): boolean {
    // Simple authentication - in production, this would call an API
    if (username && password) {
      this.currentUser = username;
      localStorage.setItem('currentUser', username);
      this.isLoggedInSubject.next(true);
      return true;
    }
    return false;
  }

  logout(): void {
    this.currentUser = null;
    localStorage.removeItem('currentUser');
    this.isLoggedInSubject.next(false);
  }

  getCurrentUser(): string | null {
    return this.currentUser;
  }

  isAuthenticated(): boolean {
    return this.isLoggedInSubject.value;
  }
}
