import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  credentials = {
    email: '',
    password: '',
  };

  constructor(public auth: AuthService) {}

  showAlert: boolean = false;
  alertMsg: string = 'Please Wait! Your are about to login!';
  alertColor: string = 'blue';

  isLoading: boolean = false;

  async login() {
    this.showAlert = true;
    this.alertMsg = 'Please Wait! Your are about to login!';
    this.alertColor = 'blue';
    this.isLoading = true;
    try {
      await this.auth.loginUser(
        this.credentials.email,
        this.credentials.password
      );
    } catch (err) {
      this.alertMsg = 'Login Failed, Try Again';
      this.alertColor = 'red';
      this.isLoading = false;
      return;
    }
    this.alertMsg = 'Login Succesful';
    this.alertColor = 'green';
  }
}
