import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LytComponent } from './lyt/lyt.component';
import { LoginComponent } from './login/login.component';
import {StdprofileComponent} from './stdprofile/stdprofile.component';
import { FinportalComponent } from './finportal/finportal.component';
import { PlcportalComponent } from './plcportal/plcportal.component';
import { MomopayoptionComponent } from './momopayoption/momopayoption.component';




const routes: Routes = [
  {path: '', component: LandingComponent},
  {path:'login', component: LoginComponent},
  {path:'layout', 
  component:LytComponent,
  children:[
    {path:'stdprofile', component:StdprofileComponent},
    {path:'findpt', component: FinportalComponent},
    {path:'plancm', component: PlcportalComponent},
    {path:'makepayment', component: MomopayoptionComponent},

  ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


export const routeComponent=[LandingComponent, LytComponent, LoginComponent,
   StdprofileComponent, FinportalComponent, PlcportalComponent, MomopayoptionComponent]