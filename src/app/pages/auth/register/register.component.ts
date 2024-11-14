import { Component } from '@angular/core';
import { HeaderComponent } from '../../../components/header/header.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { AuthService } from '../../../api/services/auth.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, FormsModule, CommonModule],
  templateUrl: './register.component.html',
  styleUrl: '../login/login.component.css'
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  code: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  // Enviar el código de verificación al correo
  sendCode() {
    if (!this.email) {
      this.errorMessage = "Por favor, ingresa un correo.";
      return;
    }
    this.authService.sendVerificationCode(this.email).subscribe({
      next: (response) => {
        console.log("Código enviado correctamente", response);
        alert("Código de verificación enviado a tu correo.");
      },
      error: (error) => {
        console.error("Error al enviar el código", error);
        this.errorMessage = "No se pudo enviar el código. Intenta nuevamente.";
      }
    });
  }

  // Registrar al usuario
  register() {
    console.log("Iniciando registro");
    this.authService.register(this.email, this.password, this.code).subscribe({
      next: (response) => {
        console.log("Registro exitoso", response);
        alert("Registro exitoso");
        // Redirigir o mostrar mensaje de éxito
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error("Error en el registro", error);
        console.error("Detalles del error:", error.error);
        if (error.status === 400) {
          this.errorMessage = "Verifique los datos ingresados.";
        } else {
          this.errorMessage = "Ocurrió un error inesperado.";
        }
      }
    });
  }
}