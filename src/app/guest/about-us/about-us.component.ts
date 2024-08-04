import { Component } from '@angular/core';
import { HeaderIndexComponent } from '../../layouts/header-index/header-index.component';
import { FooterIndexComponent } from '../../layouts/footer-index/footer-index.component';
import { ModalViewProductComponent } from '../../layouts/modal-view-product/modal-view-product.component';
import { HeaderSearchModalComponent } from '../../layouts/header-search-modal/header-search-modal.component';
import { CardDropdownComponent } from '../../layouts/card-dropdown/card-dropdown.component';
import { OfferModalComponent } from '../../layouts/offer-modal/offer-modal.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [HeaderIndexComponent,FooterIndexComponent,ModalViewProductComponent,HeaderSearchModalComponent,CardDropdownComponent,OfferModalComponent,RouterLink,RouterOutlet],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

}
