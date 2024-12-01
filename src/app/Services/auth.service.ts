import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(
    false
  )

  constructor(private router: Router) { }

  public login(user: string){
    console.log('Log in voi user la: ', user);
    if (user !== ''){
      this.loggedIn.next(true);
      this.router.navigate(['/home']);
    }
    //this.router.navigate(['/home']);
  }

  public logout(){
    console.log('Log out hier');
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }

  public isLoggedIn():Observable<boolean>{
    return this.loggedIn.asObservable();
  }
}
