import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { loginCredential } from '../../model/modal';
import { Router } from '@angular/router';
import { UsernameService } from 'src/app/services/username.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  username!:object;

  form = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
  });
  constructor(private authServic: AuthService, private router:Router, private user:UsernameService) {}
  ngOnInit(): void {}

  signin() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    //let logindata: loginCredential = { username: this.form.value.username, password: this.form.value.password };

    this.authServic.signIn(this.form.value.username,this.form.value.password).subscribe({
      next:(res) => {

        this.user.userName(res);


        this.router.navigate(['/inbox']);

    },
    error:(error)=>{
      alert('vorod na motabar');

    }
  });
  }

  get f() {
    return this.form.controls;
  }
}
