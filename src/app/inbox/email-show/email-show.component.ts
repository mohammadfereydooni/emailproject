import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { emailDetail } from 'src/app/model/email';
import { EmailService } from 'src/app/services/email.service';
import { MatDialog,MatDialogModule } from '@angular/material/dialog';
import { EmailReplyComponent } from '../email-reply/email-reply.component';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.scss']
})
export class EmailShowComponent implements OnInit {

  idEmail!:string;

  emails!:emailDetail;


constructor(private route:ActivatedRoute, private emailService : EmailService, public dialog: MatDialog){


 this.route.data.subscribe( (data) => {
  this.emails = data['email']
 })
}


openDialog() {
  const dialogRef = this.dialog.open(EmailReplyComponent);

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}

  ngOnInit(): void {


    // this.route.params.pipe(
    //   switchMap(({id})=>{
    //     return this.emailService.getemail(id);
    //   })
    // ).subscribe({
    //   next: (res)=>{
    //     this.emails = res;
    //   }
    // })

    // this.route.params.subscribe({
    //   next:(route:any)=>{
    //     this.idEmail = route.id;
    //     console.log(route.id);


    //     this.emailService.getemail(this.idEmail).subscribe(
    //       {
    //         next: (res)=>{
    //             this.emails = res;
    //             console.log(this.emails);


    //         }
    //       }
    //     )
    //   }
    // });

  }

}
