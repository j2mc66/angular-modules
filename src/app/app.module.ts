import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './auth/register/register.component';
import { RequestPasswordComponent } from './auth/request-password/request-password.component';

import { JwtInterceptor, ErrorInterceptor } from '@/interceptors';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AuthComponent,
    RegisterComponent,
    RequestPasswordComponent
  ],
  imports: [
    BrowserModule,    
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CoreModule,
    AppRoutingModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
