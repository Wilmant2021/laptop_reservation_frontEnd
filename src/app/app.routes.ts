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
import { LaptopReservationAdminComponent } from './pages/laptop-reservation-admin/laptop-reservation-admin.component';
import { HistoryReservationActiveAdminComponent } from './pages/history-reservation-active-admin/history-reservation-active-admin.component';
import { CancelReservationComponent } from './pages/cancel-reservation/cancel-reservation.component';
import { HelpComponent } from './pages/help/help.component';
import { LogoutComponent } from './pages/auth/logout/logout.component';
import { CreateLaptopAdminComponent } from './pages/create-laptop-admin/create-laptop-admin.component';
import { LogoutAdminComponent } from './pages/auth/logout-admin/logout-admin.component';


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
    //{ path: "lifecycle", component: CiclosDeVidaComponent },

    // dropdown menu routes
    { path: "laptop-reservation", component: LaptopReservationComponent },
    { path: "history-reservation", component: HistoryReservationComponent},
    { path: "laptop-reservation-admin", component: LaptopReservationAdminComponent},
    { path: "history-reservation-active-admin", component: HistoryReservationActiveAdminComponent},
    { path: "cancel-reservation", component: CancelReservationComponent},
    { path: "help", component: HelpComponent},
    { path: "logout", component: LogoutComponent},
    { path: "logout-admin", component: LogoutAdminComponent},
    { path: "create-laptop-admin", component: CreateLaptopAdminComponent},
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



