import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable, map, skipWhile, take } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AccessGuard implements  CanLoad {
  constructor(private authService:AuthService){}
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.sign$.pipe(
      skipWhile((signedin)=> signedin === null || signedin === false),
      take(1),
      map((signedin)=>{
        // console.log(signedin);

        return signedin
      })
    )
  }
}
