import { Component } from '@angular/core';

import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { TeamComponent } from '../../components/team/team.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { StudentHeaderComponent } from '../../components/student-header/student-header.component';


@Component({
  selector: 'app-help',
  standalone: true,
  imports: [CommonModule,
    RouterModule,
    TeamComponent,
    FooterComponent,
    HeaderComponent,
    StudentHeaderComponent
  ],
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent {
  constructor() {}

}
