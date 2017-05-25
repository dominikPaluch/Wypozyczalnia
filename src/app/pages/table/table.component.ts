import {Component, ViewChild} from '@angular/core';
import {DataTable, DataTableResource} from 'angular-2-data-table';
import {equipments} from './table-data';

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

}
