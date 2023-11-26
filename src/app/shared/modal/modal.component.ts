import { email } from './../../model/email';
import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { emailDetail } from 'src/app/model/email';
import { AuthService } from 'src/app/services/auth.service';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  // @Output() dismiss = new EventEmitter();

  constructor(private el: ElementRef, private emailService: EmailService, private authService:AuthService) {}
  @Input() header: string = 'Send Email';
  @Input() email!: emailDetail;

  sendEmail!: FormGroup;

  username = this.authService.userName

  ngOnInit(): void {
    this.sendEmail = new FormGroup({
      to: new FormControl('', Validators.required),
      from: new FormControl(`${this.username}@angular-email.com`, Validators.required),
      subject: new FormControl('', Validators.required),
      text: new FormControl('', Validators.required),
    });

    console.log(this.username);

  }

  onSubmit() {
    if (this.sendEmail.valid) {
      this.emailService.sendEmail(this.sendEmail.value).subscribe({
        next:res=>{
          console.log(res);

        }
      });
    }
  }
}
