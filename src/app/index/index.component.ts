import { Component } from '@angular/core';
import { MainIndexComponent } from '../layouts/main-index/main-index.component';
import { ServiceAreaComponent } from '../layouts/service-area/service-area.component';
import { FooterIndexComponent } from '../layouts/footer-index/footer-index.component';
import { ModalViewProductComponent } from '../layouts/modal-view-product/modal-view-product.component';
import { HeaderSearchModalComponent } from '../layouts/header-search-modal/header-search-modal.component';
import { CardDropdownComponent } from '../layouts/card-dropdown/card-dropdown.component';
import { OfferModalComponent } from '../layouts/offer-modal/offer-modal.component';
import { HeaderIndexComponent } from '../layouts/header-index/header-index.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [MainIndexComponent, ServiceAreaComponent, FooterIndexComponent, ModalViewProductComponent, HeaderSearchModalComponent, CardDropdownComponent, OfferModalComponent, HeaderIndexComponent,RouterOutlet],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {
  constructor(){

  }
}
