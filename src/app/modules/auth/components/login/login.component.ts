import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  formGroup = new FormGroup({
    token: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]),
  })

  constructor(private router: Router) { }

  login() {
    if(!this.formGroup.valid) {
      alert('Please enter a valid input');
      return;
    }

    const token : string = this.formGroup.value.token as string;

    localStorage.setItem('token', token);
    this.router.navigate(['/auth/movie']);
  }
}
