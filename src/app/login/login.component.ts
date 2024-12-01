import { Component } from '@angular/core';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private authService: AuthService){}

  public login():void{
    console.log('da vao login');
    this.authService.login('thanh');
  }

}