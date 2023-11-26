import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { EMPTY, Observable, catchError, of } from 'rxjs';
import { emailDetail } from '../model/email';
import { EmailService } from '../services/email.service';

@Injectable({
  providedIn: 'root'
})
export class EmailResolver implements Resolve<emailDetail> {
  constructor(private emailService:EmailService , private router:Router){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<emailDetail> | emailDetail {

    console.log(route.params['id']);

    const id = route.params['id']


  return this.emailService.getemail(id);
  }
}
