import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { SculpturesComponent } from './sculptures/sculptures.component';
import { VasesComponent } from './vases/vases.component';
import { MainComponent } from './main/main.component';
import { SculptProduct1Component } from './sculpt-product1/sculpt-product1.component';
import{VasesProduct1Component} from './vases-product1/vases-product1.component'
import { CalcProductsComponent } from './calc-products/calc-products.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    ContactComponent,
    SculpturesComponent,
    VasesComponent,
    MainComponent,
    SculptProduct1Component,
    VasesProduct1Component,
    CalcProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
