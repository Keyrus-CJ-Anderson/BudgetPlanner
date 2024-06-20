import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './features/authentication/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home/home.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './features/footer/footer/footer.component';
import { BannerComponent } from './features/banner/banner/banner.component';
import { GroupsComponent } from './features/groups/groups/groups.component';
import { ProfileComponent } from './features/profile/profile/profile.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent,
    BannerComponent,
    GroupsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
