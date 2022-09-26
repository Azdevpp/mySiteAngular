import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';
import { SculpturesComponent } from './sculptures/sculptures.component';
import { VasesComponent } from './vases/vases.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
