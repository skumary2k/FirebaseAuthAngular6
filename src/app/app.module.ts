import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { rootRouterConfig } from './app.Router';
import { AuthService } from './core/auth.service';
import { UserService } from './core/user.service';
import { UserResolver } from './user/user.resolver';
import { AuthGuard } from './core/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    BrowserModule, 
    FormsModule, 
    ReactiveFormsModule, 
    RouterModule.forRoot(rootRouterConfig, { useHash: false })
  ],
  providers: [AuthService, UserService, UserResolver, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
