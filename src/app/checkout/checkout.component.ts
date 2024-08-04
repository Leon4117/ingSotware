import { Component } from '@angular/core';
import { OfferModalComponent } from '../layouts/offer-modal/offer-modal.component';
import { CardDropdownComponent } from '../layouts/card-dropdown/card-dropdown.component';
import { HeaderSearchModalComponent } from '../layouts/header-search-modal/header-search-modal.component';
import { ModalViewProductComponent } from '../layouts/modal-view-product/modal-view-product.component';
import { FooterIndexComponent } from '../layouts/footer-index/footer-index.component';
import { HeaderIndexComponent } from '../layouts/header-index/header-index.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { disableDebugTools } from '@angular/platform-browser';
declare var $:any;

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [HeaderIndexComponent,FooterIndexComponent,ModalViewProductComponent,HeaderSearchModalComponent,CardDropdownComponent,OfferModalComponent, FormsModule, ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})


export class CheckoutComponent {
  name: any;
  url: string = "https://lightyellow-gaur-319608.hostingersite.com:8000/orders";
  carrito:any;
  totales: any;

  contador: any;
  bandera : any;
  get email(){return this.checkout.get('email')}
  get phone(){return this.checkout.get('phone')}
  get nombre(){return this.checkout.get('customer_name')}
  get direccion(){return this.checkout.get('adress')}
  get city(){return this.checkout.get('city')}
  get country(){return this.checkout.get('country')}
  get apellido(){return this.checkout.get('customer_surname')}

  checkout= new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email]),
    phone: new FormControl('',[Validators.required,Validators.pattern(/^\+?\d{10,15}$/)]),
    customer_name: new FormControl('',Validators.required),
    adress: new FormControl('',Validators.required),
    aditional: new FormControl(''),
    city: new FormControl('',Validators.required),
    country: new FormControl('',Validators.required),
    customer_surname: new FormControl('',Validators.required)
  })

  constructor(){
    this.carrito = JSON.parse(localStorage.getItem('carrito') || '{}');
    this.totales = JSON.parse(localStorage.getItem('total') || '{}');
    $('#form').submit(function(e:any){
      e.preventDefault();
    })
  }

  touch(obj:any){
    $('#'+obj).removeClass('ng-untouched');
    $('#'+obj).addClass('ng-touched');
  }

  valida(obj:any){
    if(!($('#'+obj).val() == '')){
      $('#'+obj).removeClass('ng-invalid');
      $('#'+obj).addClass('ng-valid');
      this.contador=this.contador+1;
      if(this.contador >= 7){
        this.bandera = true;
        if(this.bandera = true){

        }
      }
    }else{
      $('#'+obj).removeClass('ng-valid');
      $('#'+obj).addClass('ng-invalid');
      this.contador = this.contador-1;
      this.bandera = false;
    }
  }

  validaTel(obj:any){
    var number = parseFloat($('#'+obj).val());
    if(!(isNaN(number) || number <= 0)){
      $('#'+obj).removeClass('ng-invalid');
      $('#'+obj).addClass('ng-valid');
    }else{
      $('#'+obj).removeClass('ng-valid');
      $('#'+obj).addClass('ng-invalid');
    }
  }

  makeid(length:any) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

  guardaOrden(){
    var data = {
      folio: this.makeid(6),
      customer_name: $('#nombre').val(),
      customer_surname: $('#apellido').val(),
      email: $('#email').val(),
      phone: $('#phone').val(),
      address: $('#direccion1').val(),
      city: $('#ciudad').val(),
      country: $('#pais').val(),
      total: $('#Total').val(),
      products: this.carrito
    }
console.log(data)
    $.post(this.url, data, function(response:any) {
      console.log(response)
      alert("Orden guardada exitosamente");
      localStorage.clear()
      location.href = "/home"
    }).fail(function(error: any) {
      console.log(error.responseText)
    });
}
}
