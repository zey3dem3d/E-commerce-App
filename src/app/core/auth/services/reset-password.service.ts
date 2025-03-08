import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Auth } from '../../models/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResetPasswordService {
  constructor(private httpClient: HttpClient) {}

  verifyEmail(payload: Auth): Observable<any> {
    return this.httpClient.post(
      environment.baseUrl + 'auth/forgotPasswords',
      payload
    );
  }
  verifyCode(payload: Auth): Observable<any> {
    return this.httpClient.post(
      environment.baseUrl + 'auth/verifyResetCode',
      payload
    );
  }
  resetPassword(payload: Auth): Observable<any> {
    return this.httpClient.put(
      environment.baseUrl + 'auth/resetPassword',
      payload
    );
  }
}
