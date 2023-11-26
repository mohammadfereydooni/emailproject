import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SigninComponent } from './signin/signin.component';
import { SingupComponent } from './singup/singup.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { InputComponent } from '../shared/input/input.component';
import { SharedModule } from '../shared/shared.module';
import {HttpClientModule} from '@angular/common/http';
import { SignoutComponent } from './signout/signout.component'
import { ModalComponent } from '../shared/modal/modal.component';

@NgModule({
  declarations: [
    SigninComponent,
    SingupComponent,
    SignoutComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    SharedModule,
    HttpClientModule,
    
  ],
  exports:[]
})
export class AuthModule { }
