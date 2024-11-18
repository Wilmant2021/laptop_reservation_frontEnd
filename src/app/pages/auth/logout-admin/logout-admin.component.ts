import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../../../api/services/auth.service'; 

import { AdminHeaderComponent } from '../../../components/admin-header/admin-header.component';

@Component({
  selector: 'app-logout-admin',
  standalone: true,
  imports: [AdminHeaderComponent],
  templateUrl: './logout-admin.component.html',
  styleUrl: './logout-admin.component.css'
})
export class LogoutAdminComponent implements OnInit  {
  userEmail: string | null = '';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    // Supongamos que el nombre del usuario se almacena en el servicio AuthService
    this.userEmail = localStorage.getItem('userEmail');
  }

  logout() {
    localStorage.removeItem('userEmail');
    this.router.navigate(['/login']); // Redirigir al login
  }


}
