import { Injectable } from '@angular/core';
import {
  AsyncValidator,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class EmailTaken implements AsyncValidator {
  constructor(private auth: AuthService) {}

  validate = (control: AbstractControl): Promise<ValidationErrors | null> => {
    return this.auth.EmailTaken(control.value);
  };
}
