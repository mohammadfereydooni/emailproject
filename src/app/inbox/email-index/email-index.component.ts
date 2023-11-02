import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EmailService } from 'src/app/services/email.service';
import{emails} from '../../model/modal'
@Component({
  selector: 'app-email-index',
  templateUrl: './email-index.component.html',
  styleUrls: ['./email-index.component.scss']
})
export class EmailIndexComponent implements OnInit {

  emails:emails[]=[];

constructor(private http:HttpClient, private emailService:EmailService){}

  ngOnInit(): void {
     this.emailService.getEmail().subscribe({
      next:(data)=>{
        // console.log(data);
        this.emails = data;

      }
     })
  }

}
