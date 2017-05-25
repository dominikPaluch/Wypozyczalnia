import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {Location} from '@angular/common';
import {Equipment} from 'app/equipment';
import {EquipmentService} from '../../equipment.service';
import "rxjs/add/operator/switchMap";

@Component({
  selector: 'app-equipment-detail',
  templateUrl: './equipment-detail.component.html',
  styleUrls: ['./equipment-detail.component.scss']
})
export class EquipmentDetailComponent implements OnInit {
  equipment: Equipment;

  constructor(private equipmentService: EquipmentService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.equipmentService.getEquipment(+params['id']))
      .subscribe(equip => this.equipment = equip);
  }

  goBack(): void {
    this.location.back();
  }
}
