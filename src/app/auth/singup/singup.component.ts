import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { MatchPasswordService } from 'src/app/_validators/match-password.service';
import { UniqueUsernameService } from 'src/app/_validators/unique-username.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.scss']
})
export class SingupComponent implements OnInit {
  public sing = false;

  form = new FormGroup({
    username: new FormControl('' , [Validators.required,Validators.maxLength(50),Validators.minLength(2)],
    [this.uniqueUsername.validate.bind(this.uniqueUsername)]),
    password : new FormControl('', [Validators.required,Validators.minLength(5), Validators.maxLength(50)]),
    passwordConfirmation  : new FormControl('',[Validators.required,Validators.minLength(5), Validators.maxLength(50)])

  },{
    validators: [this.matchPassword.validate]
  }
  );

  constructor(private matchPassword:MatchPasswordService,
    private uniqueUsername:UniqueUsernameService,
    private authservic:AuthService,
    private router:Router){}
  ngOnInit(): void {
    this.authservic.sign$.subscribe((value)=>{
      this.sing = value
    })
  }


  singup(){
    // console.log(this.form.value);
    if(this.form.invalid){
      this.form.markAllAsTouched();
      return;
    }
      this.authservic.singup(this.form.value).subscribe({
        next:(res)=>{
          console.log(res);

          alert ("کاربر با موفقیت ثبت شد");
          this.router.navigate(['/inbox'])


        },
        error:(error)=>{
          console.log(error);

          alert("ثبت انجام نشد")
        }
      })

  }

 get f(){
    return this.form.controls
  }
}
