import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';
import { SculpturesComponent } from './sculptures/sculptures.component';
import { VasesComponent } from './vases/vases.component';
import { ProductsComponent } from './all-products/products.component';

const routes: Routes = [
  {
    path: '',
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
    path: 'Product/:id',
    component:ProductsComponent
  },
  {
    path: 'Contact',
    component: ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
