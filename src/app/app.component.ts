import { Component } from '@angular/core';
import { AuthService } from './Services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'qrCode';
  public isLoggedIn$: Observable<boolean> = new Observable();

  constructor(private authService: AuthService){}

  public ngOnInit():void{
    this.isLoggedIn$ = this.authService.isLoggedIn()
  }

  public logout(){
    this.authService.logout();
  }
}
