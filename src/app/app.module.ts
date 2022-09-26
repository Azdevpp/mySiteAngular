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
import { SculptProduct2Component } from './sculpt-product2/sculpt-product2.component';
import { SculptProduct3Component } from './sculpt-product3/sculpt-product3.component';
import { SculptProduct4Component } from './sculpt-product4/sculpt-product4.component';
import { VasesProduct1Component } from './vases-product1/vases-product1.component';
import { VasesProduct2Component } from './vases-product2/vases-product2.component';
import { VasesProduct3Component } from './vases-product3/vases-product3.component';
import { VasesProduct4Component } from './vases-product4/vases-product4.component';

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
    SculptProduct2Component,
    SculptProduct3Component,
    SculptProduct4Component,
    VasesProduct1Component,
    VasesProduct2Component,
    VasesProduct3Component,
    VasesProduct4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
