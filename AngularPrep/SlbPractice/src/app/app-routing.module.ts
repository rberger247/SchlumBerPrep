import { AuthGuard } from './auth/guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found.component';
import { SignInComponent } from './account/sign-in/sign-in.component';
import { PipePracticeComponent } from './pipes/pipe-practice/pipe-practice.component';

const routes: Routes = [
  {path: 'signIn',
   component: SignInComponent,
   canActivate: [AuthGuard]},
   {path: 'PracticePipe', component: PipePracticeComponent},
  {path: 'NotFound', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
