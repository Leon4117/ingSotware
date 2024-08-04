import { Component, OnInit } from '@angular/core';
import { HeaderIndexComponent } from '../layouts/header-index/header-index.component';
import { FooterIndexComponent } from '../layouts/footer-index/footer-index.component';
import { ModalViewProductComponent } from '../layouts/modal-view-product/modal-view-product.component';
import { HeaderSearchModalComponent } from '../layouts/header-search-modal/header-search-modal.component';
import { CardDropdownComponent } from '../layouts/card-dropdown/card-dropdown.component';
import { OfferModalComponent } from '../layouts/offer-modal/offer-modal.component';
import { ActivatedRoute, Params } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { url } from 'inspector';
declare var $:any;
// import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catalogue-indivual',
  standalone: true,
  imports: [HeaderIndexComponent,FooterIndexComponent,ModalViewProductComponent,HeaderSearchModalComponent,CardDropdownComponent,OfferModalComponent],
  templateUrl: './catalogue-indivual.component.html',
  styleUrl: './catalogue-indivual.component.css'
})
export class CatalogueIndivualComponent {
  dato:any;
  carrito: any;
  constructor(private _route: ActivatedRoute,private http:HttpClient){
    this.dato = this._route.snapshot.paramMap.get('id')
    let url="https://lightyellow-gaur-319608.hostingersite.com:8000/product/"+this.dato;
    this.http.get(url).subscribe(data=>{
      this.dato=data
    })
    this.carrito = JSON.parse(localStorage.getItem('carrito') || '{}');
  }

  ngOnInit(){
    var id = this.dato
    this.carrito.forEach(function(element:any){
      if(element.id == id){
        $('#des').hide()
        $('#mos').show()
      }
    });
  }
}
