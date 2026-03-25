/*
*File: city.service.ts
*Author: Firstname Lastname
*Copyright: 2023, Kossuth Lajos
*Group: Szoft II/N
*Date: 2023-03-25
*Github: https://github.com/LajosKossuth
*Licence: GNU GPL
*/


import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  http = inject(HttpClient)

  host = environment.apiHost
  getCities() {
    const url = this.host + 'cities'
    return this.http.get(url)
  }
  
}
