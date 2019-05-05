import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from '../auth/authservice';


@Component({
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent {

  

  constructor(public authService: AuthService) {}

  onSignup(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.authService.createUser(form.value.firstname,form.value.lastname,form.value.phonenumber,form.value.email,form.value.password);
  }
}
