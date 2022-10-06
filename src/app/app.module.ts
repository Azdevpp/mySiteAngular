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
import { CalcProductsComponent } from './calc-products/calc-products.component';
import { ProductsComponent } from './all-products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    ContactComponent,
    SculpturesComponent,
    VasesComponent,
    MainComponent,
    CalcProductsComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
