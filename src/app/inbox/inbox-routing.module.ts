import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InboxHomeComponent } from './inbox-home/inbox-home.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { EmailShowComponent } from './email-show/email-show.component';
import { EmailResolver } from '../resolvers/email.resolver';
import { NoteFoundComponent } from '../note-found/note-found.component';

const routes: Routes = [
  {path:'', component:InboxHomeComponent,children:[
    {
      path:'',
      title:'placeholder',
    component:PlaceholderComponent
  },
    {path: ':id',
    title:'emailshow',
     component:EmailShowComponent,
      resolve:{email: EmailResolver}
    }
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InboxRoutingModule { }
