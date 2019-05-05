import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AuthData } from './authdata';
import { LoginData } from './logindata';



@Injectable({ providedIn: "root" })
export class AuthService {
  constructor(private http: HttpClient) {}

  createUser( firstname:string,lastname:string,phonenumber:number,email: string, password: string) {
    const authData: AuthData = { firstname:firstname,lastname:lastname,phonenumber:phonenumber,email:email, password:password};
    this.http.post("http://localhost:3000/api/user/signup", authData)
      .subscribe(response => {
        console.log(response);
      });
  }

  login(email: string, password: string) {
   const loginData: LoginData = {email: email, password: password};
   this.http.post("http://localhost:3000/api/user/login", loginData)
      .subscribe(response => {
        console.log(response);
      })
  }
}
