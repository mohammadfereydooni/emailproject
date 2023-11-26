import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { emailDetail } from 'src/app/model/email';

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.scss']
})
export class EmailCreateComponent implements OnInit {

email!: emailDetail;



  ngOnInit(): void {

  }

  onSubmitForm(email:any){
      console.log(email);

  }

}
