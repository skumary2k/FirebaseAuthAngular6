import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FirebaseUserModel } from '../core/user.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: FirebaseUserModel = new FirebaseUserModel();
  profileForm: FormGroup;

  constructor(
    private authService: AuthService, 
    private router: Router, 
    private route: ActivatedRoute,
    private fb: FormBuilder
    ) 
    { 

    }

  ngOnInit() {
    this.route.data.subscribe(routeData => {
      let data = routeData['data'];
      if (data) {
        this.user = data;
        this.createForm(this.user.name);
      }
    })
  }
  
  createForm(name: any): any {
    this.profileForm = this.fb.group([
      {
        name: [name, Validators.required]
      }]);
  }

  logout() {
    this.authService.doLogout()
    .then(res => {
      this.router.navigate(['/login']);
    });
  }
}
