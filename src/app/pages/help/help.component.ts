import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { TeamComponent } from '../../components/team/team.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';


@Component({
  selector: 'app-help',
  standalone: true,
  imports: [CommonModule,
    RouterModule,
    TeamComponent,
    FooterComponent,
    HeaderComponent
  ],
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent {
  constructor() {}

}
