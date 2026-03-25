/*
*File: auth.service.ts
*Author: Firstname Lastname
*Copyright: 2023, Kossuth Lajos
*Group: Szoft II/N
*Date: 2023-03-25
*Github: https://github.com/LajosKossuth
*Licence: GNU GPL
*/


import { inject, Injectable, signal } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  http = inject(HttpClient)
  router = inject(Router)

  host = environment.apiHost

  private _isAuthenticated = signal(!!localStorage.getItem('token'))
  readonly isAuthenticated = this._isAuthenticated.asReadonly()

  login(user: any) {
    const url = this.host + 'login'
    return this.http.post(url, user)
  }
  loginSuccess() {
    this._isAuthenticated.set(true)
  }
  logout() {
    localStorage.removeItem('token')
    this._isAuthenticated.set(false)
    this.router.navigate(['/home'])
  }
}
