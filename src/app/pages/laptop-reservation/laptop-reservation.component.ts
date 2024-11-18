import { Component, OnInit } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { CommonModule } from '@angular/common';  // Importa CommonModule
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponent } from '../../components/header/header.component';
import { StudentHeaderComponent } from '../../components/student-header/student-header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { LaptopService } from '../../api/services/laptop.service';

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
    CommonModule, 
    StudentHeaderComponent,
    HttpClientModule
  ],
  templateUrl: './laptop-reservation.component.html',
  styleUrls: ['./laptop-reservation.component.css']
})

export class LaptopReservationComponent  implements OnInit {
  laptops: Laptop[] = [];
  selectedDates: { [key: number]: Date } = {};
  selectedTimes: { [key: number]: string } = {};
  reservedLaptops: { [key: number]: { date: Date, time: string } } = {};

  constructor(private laptopService: LaptopService) {}

  ngOnInit() {
    this.loadAvailableLaptops();
  }

  loadAvailableLaptops() {
    this.laptopService.getAvailableLaptops().subscribe({
      next: (data) => {
        this.laptops = data;
      },
      error: (error) => {
        console.error('Error al cargar los portátiles disponibles', error);
      }
    });
  }

  updateDate(laptopId: number, date: Date) {
    this.selectedDates[laptopId] = date;
  }

  updateTime(laptopId: number, time: any) {
    this.selectedTimes[laptopId] = time;
  }

  reserveLaptop(laptopId: number) {
    const selectedDate = this.selectedDates[laptopId];
    const selectedTime = this.selectedTimes[laptopId];

    if (selectedDate && selectedTime) {
      const reservation = {
        reservation_date: selectedDate.toISOString().split('T')[0],
        start_time: selectedTime,
        end_time: this.calculateEndTime(selectedTime),
        laptop_id: laptopId
      };

      this.laptopService.createReservation(reservation).subscribe({
        next: () => {
          alert(`El portátil ha sido reservado.`);
          // Elimina el portátil de la lista disponible
          this.laptops = this.laptops.filter(laptop => laptop.id !== laptopId);
        },
        error: (error) => {
          console.error('Error al reservar el portátil', error);
        }
      });
    } else {
      alert('Por favor, selecciona una fecha y hora para apartar el portátil.');
    }
  }

  calculateEndTime(startTime: string): string {
    // Calcula el tiempo de finalización, por ejemplo, añade 2 horas a la hora de inicio
    const [hour, minute] = startTime.split(':').map(Number);
    const endHour = (hour + 2) % 24;
    return `${endHour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
  }

}