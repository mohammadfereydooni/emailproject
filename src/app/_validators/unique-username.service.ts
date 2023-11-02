import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable, catchError, filter, map, of } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class UniqueUsernameService implements AsyncValidator{



  constructor( private http:HttpClient, private auth:AuthService) { }
  validate(control: AbstractControl<any, any>): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {

    // console.log(control);

    return this.auth.usernameAvailable(control.value).pipe(
    filter((response)=>response.available),
    map((response) =>{
      return null
    }),
    catchError((error) => {

      if(error.error.username){
        return of({nonUniqueUsername:true})
      }else {
        return of ({unknownError:true})
      }
    })
    );


    // throw new Error('Method not implemented.');
  }

}
