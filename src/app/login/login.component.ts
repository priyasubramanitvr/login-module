import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from '../auth/authservice';



@Component({
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  

  constructor(public authService: AuthService) {}

  onLogin(form: NgForm) {
    if (form.invalid) {
     return;
  }
    this.authService.login(form.value.email, form.value.password);
 }
}