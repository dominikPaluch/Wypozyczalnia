import { Component } from '@angular/core';
import { Equipment } from '../../equipment';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent  {

  cart: Equipment[];

}
