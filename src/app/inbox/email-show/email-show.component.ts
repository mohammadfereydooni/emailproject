import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-email-show',
  templateUrl: './email-show.component.html',
  styleUrls: ['./email-show.component.scss']
})
export class EmailShowComponent implements OnInit {

constructor(private route:ActivatedRoute){}

  ngOnInit(): void {
      console.log(this.route.params.subscribe(({id})=>{
        
      }));

  }

}