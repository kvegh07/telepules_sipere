/*
*File: city.components.ts
*Author: Firstname Lastname
*Copyright: 2023, Kossuth Lajos
*Group: Szoft II/N
*Date: 2023-03-25
*Github: https://github.com/LajosKossuth
*Licence: GNU GPL
*/


import { Component, inject } from '@angular/core';
import { CityService } from '../shared/city.service';

@Component({
  selector: 'app-city',
  imports: [],
  templateUrl: './city.component.html',
  styleUrl: './city.component.css',
})
export class CityComponent {
  cityService = inject(CityService)

  cities: any;

  ngOnInit() {
    this.getCities()
  }
  getCities() {
    this.cityService.getCities().subscribe({
      next: (result: any) => {
        console.log(result.data)
        this.cities = result.data
      },
      error: () => {}
    })
  }

}
