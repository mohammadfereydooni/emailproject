import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InboxRoutingModule } from './inbox-routing.module';
import { InboxHomeComponent } from './inbox-home/inbox-home.component';
import { EmailCreateComponent } from './email-create/email-create.component';
import { EmailIndexComponent } from './email-index/email-index.component';
import { EmailReplyComponent } from './email-reply/email-reply.component';
import { EmailShowComponent } from './email-show/email-show.component';
import { HttpClientModule } from '@angular/common/http';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatExpansionModule} from '@angular/material/expansion';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    InboxHomeComponent,
    EmailCreateComponent,
    EmailIndexComponent,
    EmailReplyComponent,
    EmailShowComponent,
    PlaceholderComponent
  ],
  imports: [
    CommonModule,
    InboxRoutingModule,
    HttpClientModule,
    MatGridListModule,
    MatDividerModule,
    MatListModule,
    MatExpansionModule,
    MatIconModule

  ]
})
export class InboxModule { }
