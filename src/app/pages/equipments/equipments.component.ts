import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Equipment} from 'app/equipment';
import {EquipmentService} from 'app/equipment.service';
@Component({
  selector: 'app-equipments',
  templateUrl: './equipments.component.html',
  styleUrls: ['./equipments.component.scss']
})
export class EquipmentsComponent implements OnInit {
  equipments: Equipment[];
  selectedEquipment: Equipment;

  constructor(private router: Router,
              private equipmentService: EquipmentService) {
  }

  getEquipments(): void {
    this.equipmentService.getEquipments().then(equipments => this.equipments = equipments);
  }

  ngOnInit(): void {
    this.getEquipments();
  }

  onSelect(e: Equipment): void {
    this.selectedEquipment = e;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedEquipment.id]);
  }

}

