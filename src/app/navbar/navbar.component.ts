import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @Input() username!:object;

  // public sign = false;

  constructor(public authService: AuthService ){}


  ngOnInit(): void {
    // this.authService.sign$.subscribe((value) =>{
    //   this.sign = value;

    // })



  }

}
