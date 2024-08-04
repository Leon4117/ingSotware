import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'header-index',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header-index.component.html',
  styleUrl: './header-index.component.css'
})
export class HeaderIndexComponent {
  recarga(){
    console.log("a")
    setTimeout(() => {
      location.reload()
    }, 100)
  }
}
