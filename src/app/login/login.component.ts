import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../core/user.service';
import { AuthService } from '../core/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  errorMessage: string = '';
  loginForm: FormGroup;
  
  constructor(
    private fb: FormBuilder, 
    private router: Router, 
    private userService: UserService, 
    private authService: AuthService) { }

  ngOnInit() {
    this.createForm();
   }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  tryLogin(value) {
    this.authService.doLogin(value)
    .then(res => {
      this.router.navigate(['/user']);
    });
  }

  tryGoogleLogin() {
    this.authService.doGoogleLogin()
    .then(res => {
      this.router.navigate(['/user']);
    })
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
