import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from 'src/app/user/login/login.component';
import {SignupComponent} from 'src/app/user/signup/signup.component';
import {UserModule} from 'src/app/user/user.module';

const routes: Routes = [ {path:'login',component:LoginComponent},
{path:'',redirectTo:'login',pathMatch:'full'},
{path:'signup',component:SignupComponent},
// {path:'create',component:BlogCreateComponent},
// //remember this blogId is just a random name ,you can name it anything.It is not actually the variable blogId in home component
// {path:'blog/:blogId',component:BlogViewComponent},
// {path:'edit/:blogId',component:BlogEditComponent},
{path:'**',component:LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes),UserModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
