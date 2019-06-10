import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material';
import { TableSearchComponent } from './table-search.component';
import { MaterialModule } from '../../material/material.module';

@NgModule({
  declarations: [
    TableSearchComponent
  ],
  exports: [
    TableSearchComponent
  ],
  imports: [
    CommonModule,

    MaterialModule,

    ReactiveFormsModule,
  ]
})
export class TableSearchModule { }
