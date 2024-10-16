import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../authService';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    this.authService.login(this.email, this.password)
      .then(() => {
        this.router.navigate(['/home']);
      })
      .catch(err => {
        console.log('Error:', err);
        alert('Inicio de sesión fallido');
      });
  }
}
