import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';




const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'log-in', component: LogInComponent },
      { path: 'register', component: RegisterComponent },
      { path: '**', redirectTo: 'log-in' },


    ]
  }
]
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class AuthRoutingModule { }
