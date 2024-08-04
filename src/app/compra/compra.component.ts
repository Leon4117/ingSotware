import { Component } from '@angular/core';
import { OfferModalComponent } from '../layouts/offer-modal/offer-modal.component';
import { CardDropdownComponent } from '../layouts/card-dropdown/card-dropdown.component';
import { HeaderSearchModalComponent } from '../layouts/header-search-modal/header-search-modal.component';
import { ModalViewProductComponent } from '../layouts/modal-view-product/modal-view-product.component';
import { FooterIndexComponent } from '../layouts/footer-index/footer-index.component';
import { HeaderIndexComponent } from '../layouts/header-index/header-index.component';
//import { LocalstorageModule } from './localstorage/localstorage.module';
//import { LocalStoreService}
//import { LocalstorageService } from './localstorage/localstorage.service';

import { ActivatedRoute, Params, RouterLink,RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { url } from 'inspector';
import { animate } from '@angular/animations';
declare var $:any;
let item :[];

@Component({
  selector: 'app-compra',
  standalone: true,
  imports: [HeaderIndexComponent,FooterIndexComponent,ModalViewProductComponent,HeaderSearchModalComponent,CardDropdownComponent,OfferModalComponent,RouterLink,RouterOutlet],
  templateUrl: './compra.component.html',
  styleUrl: './compra.component.css'
})

export class CompraComponent {

  Produc: any
  carrito : any
  oldVal: any
  numero: number = 0;
  conteo: any
  total:any
  textoDeInput: string = "";

  constructor(private productos:HttpClient){
    this.carrito = JSON.parse(localStorage.getItem('carrito') || '{}');

    productos.get('https://lightyellow-gaur-319608.hostingersite.com:8000/product').subscribe(data => {
      this.Produc=data
      //this.newVal=$('#newVal').val();
      this.oldVal=$('#cambio').val();
      this.conteo=$('cambio').val();
    })
  }

  ngOnInit(){
    this.total = 0
    var num = 0
    var productos = this.Produc
    this.carrito.forEach(function(element:any) {
      num += element.price
    });
    this.total = num
    var iva = this.total*0.16;
    var totalF = 0
    $('#sumaT').val(this.total.toFixed(2));
    $('#iva').val(iva.toFixed(2));
    $('#Total').val((this.total+iva).toFixed(2))

    setTimeout(()=>{
      this.carrito.forEach(function(e1:any){
        productos.forEach(function(e2:any){
          if(e1.id == e2.id){
            $('#newVal'+e1.id).val(e2.existence_qty)
            $('#cambio'+e1.id).val(e1.quantity)
            var totalP = e1.quantity * e1.price
            $('#subtotales'+e1.id).val(totalP)
          }
        });

        totalF+= parseFloat($('#subtotales'+e1.id).val())
      })
      $('#sumaT').val(totalF.toFixed(2));
      var Iva = totalF * 0.16;
      var totales = Iva + totalF;
      $('#iva').val(Iva.toFixed(2));
      $('#Total').val(totales.toFixed(2));
    },1)


  }

  senalid(params:any) {
    console.log(params)
  }

  precio(){
    var totalF = 0
    this.carrito.forEach(function(e1:any){
      totalF+= parseFloat($('#subtotales'+e1.id).val())
      e1.quantity = parseInt($('#cambio'+e1.id).val())
    })
    var Iva = totalF * 0.16;
    var totales = Iva + totalF;

    $('#sumaT').val(totalF.toFixed(2));
    $('#iva').val(Iva.toFixed(2));
    $('#Total').val(totales.toFixed(2));

    var finales ={
      sub: totalF.toFixed(2),
      iva: Iva.toFixed(2),
      total: totales.toFixed(2)
    }

    localStorage.clear()
    localStorage.setItem('carrito', JSON.stringify(this.carrito))
    localStorage.setItem('total', JSON.stringify(finales))
  }
}
