import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

interface Reservation {
  laptopId: number;
  reservationState: string
  reservationDate: Date;
  startTime: String;
  endTime: string;
}

@Component({
  selector: 'app-history-reservation-active-admin',
  standalone: true,
  imports: [HeaderComponent,
    FooterComponent,
    CommonModule
  ],
  templateUrl: './history-reservation-active-admin.component.html',
  styleUrls: ['./history-reservation-active-admin.component.css']
})
export class HistoryReservationActiveAdminComponent {
  reservations: Reservation[] = [];

  constructor() { }

  ngOnInit(): void {
    // Cargar el historial de reservas
    this.loadReservations();
  }

  loadReservations() {
    // Aquí debes obtener las reservas desde una fuente de datos, por ejemplo, una API o un servicio
    // A continuación, se muestra un ejemplo de datos de prueba
    this.reservations = [
      { laptopId: 1, reservationState: "Reservado sin ocupar", reservationDate: new Date('2024-11-01'), startTime:  '10:00 AM', endTime: '10:00 AM'},
      { laptopId: 2, reservationState: "Ocupado", reservationDate: new Date('2024-11-01'), startTime:  '10:00 AM', endTime: '12:00 PM'},
      { laptopId: 3, reservationState: "Reservado sin ocupar", reservationDate: new Date('2024-11-01'), startTime:  '12:00 PM', endTime: '3:00 PM'},
      // Agrega más datos según sea necesario
    ];

  }
}
