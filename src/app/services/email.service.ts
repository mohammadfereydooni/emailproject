import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { email, emailDetail } from '../model/email';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

    private rootUrl = 'https://api.angular-email.com'
  constructor(private http:HttpClient) { }

  getEmails(){
    return this.http.get<any>(`${this.rootUrl}/emails`);
  }

  getemail(id:string){
   return this.http.get<emailDetail>(`${this.rootUrl}/emails/${id}`)

  }

  sendEmail(email: email){
      return this.http.post(`${this.rootUrl}/emails`, email)
  }
}
