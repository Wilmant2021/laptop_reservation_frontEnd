import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-header',
  standalone: true,
  imports: [],
  templateUrl: './student-header.component.html',
  styleUrl: './student-header.component.css'
})
export class StudentHeaderComponent {
  public location = "";
  constructor(private router: Router) { 
    this.getCurrentUrl()
  }

  getCurrentUrl() {
    this.location = this.router.url;
  }

}
