import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LytComponent } from './lyt/lyt.component';
import { LoginComponent } from './login/login.component';
import { StaffComponent } from './staff/staff.component';
import {StdprofileComponent} from './stdprofile/stdprofile.component';
import { FinportalComponent } from './finportal/finportal.component';
import { PlcportalComponent } from './plcportal/plcportal.component';
import { MomopayoptionComponent } from './momopayoption/momopayoption.component';
import { ConfirmpaymentComponent } from './confirmpayment/confirmpayment.components';
import { ConfirmattendanceComponent } from './confirmattendance/confirmattendance.components';
import { AuthGuard } from './service/authguard';




const routes: Routes = [
  {path: '', component: LandingComponent},
  {path:'login', component: LoginComponent},
  {path: 'staff', component: StaffComponent},
  {path:'layout', 
  component:LytComponent,
  canActivateChild: [AuthGuard],
  children:[
    {path:'stdprofile', component:StdprofileComponent},
    {path:'findpt', component: FinportalComponent},
    {path:'plancm', component: PlcportalComponent},
    {path:'makepayment', component: MomopayoptionComponent},
    {path:'confirmpayment', component: ConfirmpaymentComponent},
    {path:'confirmattendance', component: ConfirmattendanceComponent},

  ]
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


export const routeComponent=[LandingComponent, LytComponent, LoginComponent,StaffComponent,
   StdprofileComponent, FinportalComponent, PlcportalComponent, MomopayoptionComponent,
   ConfirmattendanceComponent,ConfirmpaymentComponent]