import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

// Imports for loading & configuring the in-memory web api
import {InMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './in-memory-data.service';


import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {HeaderComponent} from './navigation/header/header.component';
import {LeftMenuComponent} from './navigation/left-menu/left-menu.component';
import {StartComponent} from './pages/start/start.component';
import {FooterComponent} from './navigation/footer/footer.component';
import {CarouselComponent} from './pages/carousel/carousel.component';
import {EquipmentsComponent} from './pages/equipments/equipments.component';
import {EquipmentService} from './equipment.service';
import {EquipmentDetailComponent} from './pages/equipment-detail/equipment-detail.component';
import {ContentComponent} from './navigation/content/content.component';
import { TableComponent } from './pages/table/table.component';

import { DataTableModule } from 'angular-2-data-table';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftMenuComponent,
    StartComponent,
    FooterComponent,
    CarouselComponent,
    EquipmentsComponent,
    EquipmentDetailComponent,
    ContentComponent,
    TableComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    DataTableModule

  ],
  providers: [
    EquipmentService,
    ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
