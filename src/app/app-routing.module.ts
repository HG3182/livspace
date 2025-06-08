import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { ServicesComponent } from './components/services/services.component';
import { HowitworkComponent } from './components/howitwork/howitwork.component';
import { ModularComponent } from './components/modular/modular.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'aboutus',
    component: AboutusComponent
  },
  {
    path: 'gallery',
    component: GalleryComponent
  },
  {
    path: 'contactus',
    component: ContactusComponent
  },
  {
    path: 'services',
    component: ServicesComponent
  },
  {
    path: 'howitwork',
    component: HowitworkComponent
  },
  {
    path: 'modular',
    component: ModularComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
