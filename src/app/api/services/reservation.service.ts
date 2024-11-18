import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private apiUrl = 'https://ingsoft-backend-production.up.railway.app/api';

  constructor(private http: HttpClient) {}

  // Método para crear una reserva
  makeReservation(reservationDate: string, startTime: string, endTime: string, laptopId: number): Observable<any> {
    const body = {
      reservation_date: reservationDate,
      start_time: startTime,
      end_time: endTime,
      laptop_id: laptopId.toString()
    };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<any>(`${this.apiUrl}/reservations`, body, { headers });
  }
}
