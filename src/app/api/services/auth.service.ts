import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://ingsoft-backend-production.up.railway.app/api';

  constructor(private http: HttpClient) { }

   // Método para enviar el código de verificación
   sendVerificationCode(email: string): Observable<any> {
     return this.http.post(`${this.apiUrl}/auth/register/send-code`, { email });
    }

  register(email: string, password: string, code: string): Observable<any> {
    const body = { email, password, code };

    // Asegurarse de que el Content-Type sea application/json
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(`${this.apiUrl}/auth/register/`, body, { headers });

    
  }
  login(email: string, password: string): Observable<any> {
    const loginData = { email, password };
    return this.http.post<any>(`${this.apiUrl}/auth/login`, loginData);
  }
}
