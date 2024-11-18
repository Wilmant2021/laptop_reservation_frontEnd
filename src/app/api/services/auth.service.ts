import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://ingsoft-backend-production.up.railway.app/api';

  constructor(private http: HttpClient,  private router: Router) {
    
   }

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
    return this.http.post<any>(`${this.apiUrl}/auth/login`, loginData).pipe(
      tap(response => {
       
        if (response && response.data) {
          const role = response.data.rol;

          // Guarda el rol del usuario en el localStorage para poder acceder a él globalmente
          // Guardar el correo en el almacenamiento local
          
          localStorage.setItem('userEmail', email);

          localStorage.setItem('userRole', role);

          // Redirige basado en el rol
          this.redirectBasedOnRole(role);
        }

        console.log("Login response:", response); // Verifica qué contiene response
        if (response.email) {
          localStorage.setItem('userEmail', response.email); // Guarda el correo solo si existe
        } else {
          console.warn('No se recibió el correo en la respuesta.');
        }
      })
    );
  }

  private redirectBasedOnRole(role: string) {
    if (role === 'ADMIN') {
      this.router.navigate(['/admin-dashboard']);  // Ruta para administradores
    } else if (role === 'STUDENT') {
      this.router.navigate(['/student-dashboard']);  // Ruta para estudiantes
    } else {
      this.router.navigate(['/login']);  // En caso de rol desconocido, redirigir al login
    }
  }
  

  logout() {
    localStorage.removeItem('token'); // O cualquier otro dato almacenado
    localStorage.removeItem('userName'); // Si almacenaste el nombre del usuario
  }

  
  getUserName(): string {
    return localStorage.getItem('userName') || '';
  }
}
