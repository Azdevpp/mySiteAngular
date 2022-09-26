import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';
import { SculpturesComponent } from './sculptures/sculptures.component';
import { VasesComponent } from './vases/vases.component';
import{SculptProduct1Component}from './sculpt-product1/sculpt-product1.component'
import { SculptProduct2Component } from './sculpt-product2/sculpt-product2.component';
import { SculptProduct3Component } from './sculpt-product3/sculpt-product3.component';
import { SculptProduct4Component } from './sculpt-product4/sculpt-product4.component';
import { VasesProduct1Component } from './vases-product1/vases-product1.component';
import { VasesProduct2Component } from './vases-product2/vases-product2.component';
import { VasesProduct3Component } from './vases-product3/vases-product3.component';
import { VasesProduct4Component } from './vases-product4/vases-product4.component';

const routes: Routes = [
  {
    path: 'Home',
    component: MainComponent
  },
  {
    path: 'Sculptures',
    component: SculpturesComponent
  },
  {
    path: 'Vases',
    component: VasesComponent
  },
  {
    path: 'Contact',
    component: ContactComponent
  },
  {
    path: 'sculptProduct1',
    component: SculptProduct1Component
  },
  {
    path: 'sculptProduct2',
    component: SculptProduct2Component
  },
  {
    path: 'sculptProduct3',
    component: SculptProduct3Component
  },
  {
    path: 'sculptProduct4',
    component: SculptProduct4Component
  },
  {
    path: 'VasesProduct1',
    component: VasesProduct1Component
  },
  {
    path: 'VasesProduct2',
    component: VasesProduct2Component
  },
  {
    path: 'VasesProduct3',
    component: VasesProduct3Component
  },
  {
    path: 'VasesProduct4',
    component: VasesProduct4Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
