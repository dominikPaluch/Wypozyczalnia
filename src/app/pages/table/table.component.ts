import {Component, ViewChild} from '@angular/core';
import {DataTable, DataTableResource} from 'angular-2-data-table';
import {equipments} from './table-data';
import {CartComponent} from '../cart/cart.component';
import {Equipment} from 'app/equipment';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  equipmentsResource = new DataTableResource(equipments);
  equipments = [];
  equipmentsCount = 0;
  priceLimit = 300;
  cart = [];
  cartCount = 0;


  @ViewChild(DataTable) equipmentsTable: DataTable;

  constructor() {
    this.rowColors = this.rowColors.bind(this);

    this.equipmentsResource.count().then(count => this.equipmentsCount = count);
  }

  reloadEquipments(params) {
    this.equipmentsResource.query(params).then(equipments => this.equipments = equipments);
  }

  // custom features:

  equipmentClicked(equipment) {
    alert(equipment.name);
  }

  rowColors(equipment) {
    if (equipment.price >= this.priceLimit) {
      return 'rgb(255, 255, 197)';
    }
    ;
  }

  addToCart(equipment, count): void {
    for ( let i = 0; i < count; i++ ) {
      this.cart.push(equipment);
    }
    console.log(this.cart.length);
  }

  incrementCart(): void {
    this.cartCount++;
  }

  decrementCart(): void {
    if (this.cartCount >= 1) {
      this.cartCount--;
    }
  }

  // removeFromCart(equipment): void {
  //   this.cart.splice(equipment);
  // }

}
