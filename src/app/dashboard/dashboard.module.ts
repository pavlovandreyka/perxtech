import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { MaterialModule } from '../material/material.module';
import { TableSearchModule } from '../shared/table-search/table-search.module';
import { HeaderModule } from '../shared/header/header.module';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    TableSearchModule,
    HeaderModule,
  ]
})
export class DashboardModule { }
