import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LaptopService } from '../../api/services/laptop.service';  // Si lo estás usando en otro lugar
import { AdminHeaderComponent } from '../../components/admin-header/admin-header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-laptop-admin',
  standalone: true,
  imports: [AdminHeaderComponent, FooterComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './create-laptop-admin.component.html',
  styleUrls: ['./create-laptop-admin.component.css']
})
export class CreateLaptopAdminComponent {
  laptopForm: FormGroup;
  successMessage: string = '';
  errorMessage: string = '';
  private apiUrl = 'https://ingsoft-backend-production.up.railway.app/api/laptops'

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.laptopForm = this.fb.group({
      description: ['', Validators.required],  // Haciendo description obligatorio
      serial: ['', Validators.required],       // Haciendo serial obligatorio
    });
  }

  onSubmit() {
    if (this.laptopForm.invalid) {
      this.errorMessage = 'Por favor completa todos los campos obligatorios.';
      return;
    }
  
    const laptopData = this.laptopForm.value;
  
    // Recuperar el token del almacenamiento local
    const token = localStorage.getItem('token');
    if (!token) {
      this.errorMessage = 'No se encontró el token de autenticación. Inicia sesión como administrador.';
      return;
    }
  
    const headers = { 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}` // Agregar el token al encabezado
    };
  
    this.http.post(this.apiUrl, laptopData).subscribe({
      next: (response) => {
        console.log('Portátil creado:', response);
        this.successMessage = 'Portátil creado exitosamente.';
        this.errorMessage = '';
        this.laptopForm.reset(); // Limpia el formulario después de crear
      },
      error: (error) => {
        console.error('Error al crear el portátil', error);
        if (error.status === 401) {
          this.errorMessage = 'No estás autorizado para realizar esta acción. Inicia sesión nuevamente.';
        } else {
          this.errorMessage = 'Ocurrió un error al intentar crear el portátil.';
        }
      }
    });
  }
  
}
