import { Component, inject } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  auth = inject(AuthService)
  builder = inject(FormBuilder)
  router = inject(Router)

  loginForm = this.builder.group({
    name: [''],
    password: ['']
  })

  login() {
    console.log('Belépés...')
    console.log(this.loginForm.value)

    this.auth.login(this.loginForm.value).subscribe({
      next: (result: any) => {
        // console.log(result.accessToken - ellenőriztem, hogy megkapom e a tokent)
        localStorage.setItem('token', result.accessToken)
        this.auth.loginSuccess()
        this.router.navigate(['/city'])
      },
        error: () => {}
      
    })
  }
}
