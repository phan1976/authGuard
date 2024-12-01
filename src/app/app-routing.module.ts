import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth/auth.component';
import { MeinNavComponent } from './mein-nav/mein-nav.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [{path:'home',component:HomeComponent, canActivate: [AuthGuard]},
  {path:'about',component:AboutComponent, canActivate: [AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'auth',component:AuthComponent},
  {path:'meinnav',component:MeinNavComponent},
  {path:'',component:LoginComponent},
  {path:'**',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
