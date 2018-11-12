import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  errorMessage: string;
  successMessage: string;
  registerForm: FormGroup;

  constructor(private authService: AuthService, private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.registerForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  tryRegister(value) {
    this.authService.doRegister(value)
    .then(res => {
      this.errorMessage = "";
      this.successMessage = "Your account has been created successfully!";
    }, err => {
      this.successMessage = "";
      this.errorMessage = err.message;
    });
  }

  tryGoogleLogin() {
    this.authService.doGoogleLogin()
    .then(res => {
      this.router.navigate(['/user']);
    });
  }

  tryFacebookLogin() {
    this.authService.doFacebookLogin()
    .then(res => {
      this.router.navigate(['/user']);
    });
  }

  tryTwitterLogin() {
    this.authService.doTwitterLogin()
    .then(res => {
      this.router.navigate(['/user']);
    });
  }

}
