/**
 * Created by domin on 23.05.2017.
 */
import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Equipment } from './equipment';

@Injectable()
export class EquipmentService {
  private equipmentsUrl = 'api/equipments';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getEquipments(): Promise<Equipment[]> {
    return this.http.get(this.equipmentsUrl)
      .toPromise()
      .then(response => response.json().data as Equipment[])
      .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  getEquipment(id: number): Promise<Equipment> {
    const url = `${this.equipmentsUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Equipment)
      .catch(this.handleError);
  }

  update(equipment: Equipment): Promise<Equipment> {
    const url = `${this.equipmentsUrl}/${equipment.id}`;
    return this.http
      .put(url, JSON.stringify(equipment), {headers: this.headers})
      .toPromise()
      .then(() => equipment)
      .catch(this.handleError);
  }

  create(name: string): Promise<Equipment> {
    return this.http
      .post(this.equipmentsUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Equipment)
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.equipmentsUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }



}
