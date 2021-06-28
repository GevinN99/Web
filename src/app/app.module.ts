import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import {NgbConfig, NgbModule} from '@ng-bootstrap/ng-bootstrap';

//----------------------------------------
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { MainComponent } from './components/pages/main/main.component';
import { CustomerOrderComponent } from './components/pages/customer-order/customer-order.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { CartComponent } from './components/pages/cart/cart.component';
import { CreateAccountComponent } from './components/pages/create-account/create-account.component';
import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    CustomerOrderComponent,
    LoginPageComponent,
    CartComponent,
    CreateAccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    SlickCarouselModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
