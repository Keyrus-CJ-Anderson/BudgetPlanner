import { Component, HostListener, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    constructor(
      private router: Router
    ) { 
      
    }
  
    ngOnInit(): void {
    }

    signIn() {
      console.log('Sign In');
      this.router.navigateByUrl('/home');
    }
}
