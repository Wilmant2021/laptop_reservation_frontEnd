import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { TeamPageComponent } from './pages/team-page/team-page.component';
import { LoginComponent } from './pages/Auth/login/login.component';
import { RegisterComponent } from './pages/Auth/register/register.component';
import { CiclosDeVidaComponent } from './pages/ciclos-de-vida/ciclos-de-vida.component';
import { LaptopReservationComponent } from './pages/laptop-reservation/laptop-reservation.component';
import { SwebokComponent } from './pages/swebok/swebok.component';
import { DatabaseTablesComponent } from './pages/database-tables/database-tables.component';
import { ComputerReservationComponent } from './pages/computer-rentals/computer-rentals.component';
import { HistoryReservationComponent } from './pages/history-reservation/history-reservation.component';


export const routes: Routes = [
    //general routes
    {
        path: 'home', component: HomeComponent
    },
    { path: 'computer-lend', component: ComputerReservationComponent },
    {
        path: 'about', component: AboutPageComponent
    },
    { path: "login", component: LoginComponent },
    { path: "register", component: RegisterComponent },
    { path: "lifecycle", component: CiclosDeVidaComponent },

    // dropdown menu routes
    { path: "laptop-reservation", component: LaptopReservationComponent },
    { path: "history-reservarion", component: HistoryReservationComponent},
    {
        path: 'scrum-team', component: TeamPageComponent
    },
    {
        path: 'swebok', component: SwebokComponent
    },
    {
        path: 'database-tables', component: DatabaseTablesComponent
    },

    // default redirect
    { path: "", redirectTo: "home", pathMatch: "full" },
    
    // 404 page
    {
        path: '**', component: NotFoundComponent
    },

];



