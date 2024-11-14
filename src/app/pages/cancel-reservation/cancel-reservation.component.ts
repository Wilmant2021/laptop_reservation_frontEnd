import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';


@Component({
  selector: 'app-cancel-reservation',
  standalone: true,
  imports: [HeaderComponent,
    FooterComponent,
    CommonModule
  ],
  templateUrl: './cancel-reservation.component.html',
  styleUrls: ['./cancel-reservation.component.css']
})
export class CancelReservationComponent implements OnInit{
  reservation: any;

  ngOnInit(): void {
    // Datos de ejemplo de la reserva
    this.reservation = {
      id: '123456',
      date: '2024-11-15',
      startTime: '18:08',
      endTime: '20:08'
    };
  }

  cancelReservation(): void {
    if (this.reservation) {
      // Eliminar la reserva simulada
      this.reservation = null;
      alert('Reservation canceled successfully');
    }
  }
}
