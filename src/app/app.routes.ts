import { Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ContactComponent } from './guest/contact/contact.component';
import { AboutUsComponent } from './guest/about-us/about-us.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { CatalogueIndivualComponent } from './catalogue-indivual/catalogue-indivual.component';
import { ActivatedRoute } from '@angular/router';
import { CompraComponent } from './compra/compra.component';
import { CheckoutComponent } from './checkout/checkout.component';

export const routes: Routes = [
  { path: 'home', component: IndexComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutUsComponent },
  { path: 'catalogue', component: CatalogueComponent },
  { path: 'catalogue_individual/:id', component: CatalogueIndivualComponent },
  { path: 'compra', component: CompraComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: '**', redirectTo: 'home' }
];
