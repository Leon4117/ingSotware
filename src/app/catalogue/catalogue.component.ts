import { Component } from '@angular/core';
import { HeaderIndexComponent } from '../layouts/header-index/header-index.component';
import { FooterIndexComponent } from '../layouts/footer-index/footer-index.component';
import { ModalViewProductComponent } from '../layouts/modal-view-product/modal-view-product.component';
import { HeaderSearchModalComponent } from '../layouts/header-search-modal/header-search-modal.component';
import { CardDropdownComponent } from '../layouts/card-dropdown/card-dropdown.component';
import { OfferModalComponent } from '../layouts/offer-modal/offer-modal.component';
import { HttpClient } from '@angular/common/http';
import { RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-catalogue',
  standalone: true,
  imports: [HeaderIndexComponent,FooterIndexComponent,ModalViewProductComponent,HeaderSearchModalComponent,CardDropdownComponent,OfferModalComponent,RouterLink],
  templateUrl: './catalogue.component.html',
  styleUrl: './catalogue.component.css'
})

export class CatalogueComponent {
  nombrep: any
  constructor(private productos:HttpClient, private _router: ActivatedRoute){
    let data = _router.snapshot.paramMap.keys
    productos.get('https://lightyellow-gaur-319608.hostingersite.com:8000/product').subscribe(data => {
      this.nombrep=data
    })
  }

 senalid(params:any) {
    console.log(params)
  }
}
