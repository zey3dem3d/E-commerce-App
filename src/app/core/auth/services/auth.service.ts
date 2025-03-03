import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpClient: HttpClient, private router: Router) {}

  register(data: any): Observable<any> {
    return this.httpClient.post(environment.baseUrl + 'auth/signup', data);
  }

  login(data: any): Observable<any> {
    return this.httpClient.post(environment.baseUrl + 'auth/signin', data);
  }

  decodeToken() {
    try {
      const decoded = jwtDecode(localStorage.getItem('authToken')!);
      console.log(decoded);
    } catch {
      this.logout();
    }
  }

  saveToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  // getToken(): string | null {
  //   return localStorage.getItem('authToken');
  // }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('authToken');
  }

  logout() {
    this.router.navigate(['login']);
    localStorage.clear();
  }
}
