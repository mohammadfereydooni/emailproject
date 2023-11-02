import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { SingupComponent } from './singup/singup.component';
import { SignoutComponent } from './signout/signout.component';

const routes: Routes = [
  { path: '', component: SigninComponent },
  { path: 'singup', component: SingupComponent },
  {path: 'signout', component:SignoutComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
