import { Component, OnInit } from '@angular/core';
import { EmailService } from 'src/app/services/email.service';


@Component({
  selector: 'app-inbox-home',
  templateUrl: './inbox-home.component.html',
  styleUrls: ['./inbox-home.component.scss']
})
export class InboxHomeComponent implements OnInit{


  constructor(private emailServic:EmailService){}



  ngOnInit(): void {
    this.emailServic.getEmail().subscribe({
      next:(data)=>{
        // console.log(data);

      }
    })
  }


}
