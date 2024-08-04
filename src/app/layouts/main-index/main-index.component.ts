import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { url } from 'inspector';
import { OfferModalComponent } from '../offer-modal/offer-modal.component';
import { CardDropdownComponent } from '../card-dropdown/card-dropdown.component';
import { HeaderSearchModalComponent } from '../header-search-modal/header-search-modal.component';
import { ModalViewProductComponent } from '../modal-view-product/modal-view-product.component';
import { FooterIndexComponent } from '../footer-index/footer-index.component';
import { HeaderIndexComponent } from '../header-index/header-index.component';

@Component({
  selector: 'main-index',
  standalone: true,
  imports: [HeaderIndexComponent,FooterIndexComponent,ModalViewProductComponent,HeaderSearchModalComponent,CardDropdownComponent,OfferModalComponent,RouterLink,RouterOutlet],
  templateUrl: './main-index.component.html',
  styleUrl: './main-index.component.css',
})
export class MainIndexComponent {
  proi: any
  prospe: any
  dato:any;
  dato2:any;
  dato3:any;
  dato4:any;
  constructor(private productos:HttpClient,private _route: ActivatedRoute,private http:HttpClient){
    productos.get('https://lightyellow-gaur-319608.hostingersite.com:8000/product').subscribe(data => {
      this.proi=data
      console.log(this.proi)
      this.prospe = 1;
    })

    console.log(this._route.snapshot.paramMap.get('id'))
    this.dato = this._route.snapshot.paramMap.get('id')
    let url="https://lightyellow-gaur-319608.hostingersite.com:8000/product/"+1;
    this.http.get(url).subscribe(data=>{
      this.dato=data
    console.log(this.dato);
    console.log(this.dato.name);
    })

    //dato 2

    this.dato2 = this._route.snapshot.paramMap.get('id')
    let url2="https://lightyellow-gaur-319608.hostingersite.com:8000/product/"+2;
    this.http.get(url2).subscribe(data=>{
      this.dato2=data
    console.log(this.dato2);
    console.log(this.dato2.name);
    })

    //dato 3

    this.dato3 = this._route.snapshot.paramMap.get('id')
    let url3="https://lightyellow-gaur-319608.hostingersite.com:8000/product/"+3;
    this.http.get(url2).subscribe(data=>{
      this.dato3=data
    console.log(this.dato3);
    console.log(this.dato3.name);
    })
  }

 senalid(params:any) {
    console.log(params)
  }

}
