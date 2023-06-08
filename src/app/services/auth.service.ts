import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {Observable, of, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  setToken(token: string) {
    console.log(token)
    localStorage.setItem('token', token)
  }

  getToken() {
    return localStorage.getItem('token')
  }

  removeToken(){
    localStorage.removeItem('token')
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  login(userInfo: {email: string, password: string}): Observable<string | boolean> {
    if(userInfo.email === 'admin@gmail.com' && userInfo.password === 'Admin123'){
      this.setToken('some_token')
      return of(true)
    }
    return throwError(() => new Error('Login Failed'))
  }

  logout() {
    this.router.navigate(['login'])
  }
}
