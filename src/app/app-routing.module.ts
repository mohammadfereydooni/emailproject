import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingupComponent } from './auth/singup/singup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AccessGuard } from './guard/access.guard';

const routes: Routes = [
 {path:'inbox',
 
 canLoad:[AccessGuard],
 loadChildren:()=> import('./inbox/inbox.module').then(m => m.InboxModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
