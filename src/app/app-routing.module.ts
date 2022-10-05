import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';
import { SculpturesComponent } from './sculptures/sculptures.component';
import { VasesComponent } from './vases/vases.component';
import{SculptProduct1Component}from './sculpt-product1/sculpt-product1.component'
import { VasesProduct1Component } from './vases-product1/vases-product1.component';

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
    path: 'Sculptures/:id',
    component:SculptProduct1Component
  },
  {
    path: 'Vases',
    component: VasesComponent
  },
  {
    path: 'Vases/:id',
    component:VasesProduct1Component
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
