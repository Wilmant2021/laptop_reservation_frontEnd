import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../api/services/auth.service';  // Asegúrate de tener el servicio AuthService
import { FormsModule } from '@angular/forms'

import { HeaderComponent } from '../../../components/header/header.component';
import { FooterComponent } from '../../../components/footer/footer.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    // Llamada al servicio para iniciar sesión
    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        console.log('Inicio de sesión exitoso', response);
        // Redirigir a otra página después de iniciar sesión correctamente
        this.router.navigate(['/laptop-reservation']);  // Ajusta la ruta según lo que necesites
      },
      error: (error) => {
        console.error('Error en el inicio de sesión', error);
        this.errorMessage = 'Correo o contraseña incorrectos.';
      }
    });
  }
}
