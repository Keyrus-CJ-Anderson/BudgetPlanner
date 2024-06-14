import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/authentication/login/login.component';
import { HomeComponent } from './features/home/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{
      initialNavigation: 'enabledBlocking',
    }),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
