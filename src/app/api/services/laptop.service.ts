import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Laptop {
  id: number;
  name: string;
}

interface Reservation {
  reservation_date: string;
  start_time: string;
  end_time: string;
  laptop_id: number;
}

@Injectable({
  providedIn: 'root'
})
export class LaptopService {
  private apiUrl = 'https://ingsoft-backend-production.up.railway.app/api';

  constructor(private http: HttpClient) {}

  getAvailableLaptops(): Observable<Laptop[]> {
    return this.http.get<Laptop[]>(`${this.apiUrl}/student/laptops?stateId=1`);
  }

  createReservation(reservation: Reservation): Observable<any> {
    return this.http.post(`${this.apiUrl}/student/reservations`, reservation);
  }

  createLaptop(data: { description: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/laptops`, data);
  }
}
