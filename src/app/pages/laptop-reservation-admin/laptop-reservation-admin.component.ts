import { Component } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { CommonModule } from '@angular/common';  // Importa CommonModule

import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { AdminHeaderComponent } from '../../components/admin-header/admin-header.component';

interface Laptop {
  id: number;
  name: string;
  dateTime?: string;
}

@Component({
  selector: 'app-laptop-reservation-admin',
  standalone: true,
  imports: [
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatFormFieldModule,
    FormsModule,
    NgxMaterialTimepickerModule,
    CommonModule,
    HeaderComponent,
    FooterComponent,
    AdminHeaderComponent
  ],
  templateUrl: './laptop-reservation-admin.component.html',
  styleUrls: ['./laptop-reservation-admin.component.css'],
})
export class LaptopReservationAdminComponent {
  selectedDate: Date | null = null;
  selectedTime: string | null = null;
  userIdInput: { [key: number]: number } = {}; // Almacena el ID de usuario para cada portátil
  Laptop = [
    { id: 1, name: 'Portátil 1' },
    { id: 2, name: 'Portátil 2' },
    { id: 3, name: 'Portátil 3' },
    { id: 4, name: 'Portátil 4' },
    { id: 5, name: 'Portátil 5' },
    { id: 6, name: 'Portátil 6' },
    { id: 7, name: 'Portátil 7' },
    { id: 8, name: 'Portátil 8' },
    { id: 9, name: 'Portátil 9' },
    { id: 10, name: 'Portátil 10' },
  ];

  selectedDates: { [key: number]: Date } = {};
  selectedTimes: { [key: number]: string } = {};
  reservedLaptops: { [key: number]: { date: Date; time: string; userId: number } } = {};

  constructor() {}

  updateDate(laptopId: number, date: Date) {
    this.selectedDates[laptopId] = date;
  }

  updateTime(laptopId: number, time: any) {
    this.selectedTimes[laptopId] = time;
  }

  reserveLaptop(laptopId: number) {
    const selectedDate = this.selectedDates[laptopId];
    const selectedTime = this.selectedTimes[laptopId];
    const userId = this.userIdInput[laptopId]; // Obtén el ID de usuario ingresado

    if (selectedDate && selectedTime && userId) {
      this.reservedLaptops[laptopId] = { date: selectedDate, time: selectedTime, userId };
      alert(
        `El portátil ${this.Laptop.find((l) => l.id === laptopId)?.name} ha sido apartado para el ${selectedDate.toLocaleDateString()} a las ${selectedTime} por el usuario con ID: ${userId}`
      );
    } else {
      alert('Por favor, selecciona una fecha, hora y ID de usuario para apartar el portátil.');
    }
  }
}