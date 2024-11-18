import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../api/services/auth.service';  // Asegúrate de tener el servicio AuthService
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'; 

import { HeaderComponent } from '../../../components/header/header.component';
import { FooterComponent } from '../../../components/footer/footer.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        if (response && response.data && response.data.rol) {
          const role = response.data.rol;

          // Redirigir según el rol
          if (role === 'ADMIN') {
            this.router.navigate(['/laptop-reservation-admin']);  // Ruta para administradores
          } else if (role === 'STUDENT') {
            this.router.navigate(['/laptop-reservation']);  // Ruta para estudiantes
          } else {
            this.errorMessage = 'Rol de usuario no reconocido.';
          }
          localStorage.setItem('token', response.data.token); // Guarda el token
        } else {
          this.errorMessage = 'Respuesta del servidor no válida.';
        }
      },
      error: (error) => {
        console.error('Error en el inicio de sesión', error);
        this.errorMessage = 'Correo o contraseña incorrectos.';
      }
    });
  }
}
