import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class UsernameService {

  username!:object;

  constructor(private authServices:AuthService) {

  }

  userName(res:object){
    this.username = res;
  }


}
