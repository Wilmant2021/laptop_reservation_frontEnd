import { Component, OnInit } from '@angular/core';
import { StudentHeaderComponent } from '../../../components/student-header/student-header.component';

import { Router } from '@angular/router';
import { AuthService } from '../../../api/services/auth.service'; 


@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [StudentHeaderComponent],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent implements OnInit  {
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
