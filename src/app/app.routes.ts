/*
*File: city.components.ts
*Author: Firstname Lastname
*Copyright: 2023, Kossuth Lajos
*Group: Szoft II/N
*Date: 2023-03-25
*Github: https://github.com/LajosKossuth
*Licence: GNU GPL
*/

import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AboutComponent } from './about/about.component';
import { CityComponent } from './city/city.component';
import { NopageComponent } from './nopage/nopage.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'home', component: HomeComponent},
    { path: 'login', component: LoginComponent},
    { path: 'about', component: AboutComponent},
    { path: 'city', component: CityComponent},
    { path: '**', component: NopageComponent},
];
