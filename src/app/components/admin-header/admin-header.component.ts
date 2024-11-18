import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-header',
  standalone: true,
  imports: [],
  templateUrl: './admin-header.component.html',
  styleUrl: './admin-header.component.css'
})
export class AdminHeaderComponent {

  public location = "";
  constructor(private router: Router) { 
    this.getCurrentUrl()
  }

  getCurrentUrl() {
    this.location = this.router.url;
  }

}
