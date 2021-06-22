import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomerOrderComponent} from "./components/pages/customer-order/customer-order.component";
import {MainComponent} from "./components/pages/main/main.component";
import {LoginPageComponent} from "./components/pages/login-page/login-page.component";
import {CreateAccountComponent} from "./components/pages/create-account/create-account.component";

const routes: Routes = [
  {path: '', component: MainComponent},
  {path:'order', component: CustomerOrderComponent},
  {path:'customer', component: CreateAccountComponent},
  {path: 'loginPage', component: LoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
