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

interface Laptop {
  id: number;
  name: string;
  dateTime?: String;  // Aquí se guardará la fecha y hora seleccionada
}

@Component({
  selector: 'app-laptop-reservation',
  standalone: true,
  imports: [MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatFormFieldModule,
    HeaderComponent,
    FormsModule,
    NgxMaterialTimepickerModule,
    FooterComponent,
    CommonModule],
  templateUrl: './laptop-reservation.component.html',
  styleUrls: ['./laptop-reservation.component.css']
})

export class LaptopReservationComponent {
  selectedDate: Date | null = null;
  selectedTime: string | null = null;
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
  ]

  selectedDates: { [key: number]: Date } = {};
  selectedTimes: { [key: number]: string } = {};
  reservedLaptops: { [key: number]: { date: Date, time: string } } = {};

  constructor() {}

  // Función para manejar la fecha seleccionada
  updateDate(laptopId: number, date: Date) {
    this.selectedDates[laptopId] = date;
  }

  // Función para manejar la hora seleccionada
  updateTime(laptopId: number, time: any) {
    this.selectedTimes[laptopId] = time;
  }  

  // Función para manejar el botón de apartar
  reserveLaptop(laptopId: number) {
    const selectedDate = this.selectedDates[laptopId];
    const selectedTime = this.selectedTimes[laptopId];

    if (selectedDate && selectedTime) {
      // Guarda la fecha y hora en el objeto reservedLaptops
      this.reservedLaptops[laptopId] = { date: selectedDate, time: selectedTime };
      alert(`El portátil ${this.Laptop.find(l => l.id === laptopId)?.name} ha sido apartado para el ${selectedDate.toLocaleDateString()} a las ${selectedTime}`);
    } else {
      alert('Por favor, selecciona una fecha y hora para apartar el portátil.');
    }
  }

}