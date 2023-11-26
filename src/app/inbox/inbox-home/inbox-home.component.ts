import { ModalComponent } from './../../shared/modal/modal.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog,MatDialogModule } from '@angular/material/dialog';
import { EmailService } from 'src/app/services/email.service';
import {MatButtonModule} from '@angular/material/button';
import { EmailCreateComponent } from '../email-create/email-create.component';


@Component({
  selector: 'app-inbox-home',
  templateUrl: './inbox-home.component.html',
  styleUrls: ['./inbox-home.component.scss']
})
export class InboxHomeComponent implements OnInit{


  constructor(private emailServic:EmailService, public dialog: MatDialog){}



  ngOnInit(): void {
    this.emailServic.getEmails().subscribe({
      next:(data)=>{
        // console.log(data);

      }
    })
  }


  openDialog() {
    const dialogRef = this.dialog.open(EmailCreateComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}
