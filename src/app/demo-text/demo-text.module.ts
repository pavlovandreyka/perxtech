import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoTextComponent } from './demo-text/demo-text.component';
import { DemoTextRoutingModule } from './demo-text-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderModule } from '../shared/header/header.module';
import { MaterialModule } from '../material/material.module';
import { InsertTextDirective } from './shared/directives/insert-text.directive';

@NgModule({
  declarations: [DemoTextComponent, InsertTextDirective],
  imports: [
    CommonModule,
    DemoTextRoutingModule,
    ReactiveFormsModule,
    HeaderModule,
    MaterialModule,
  ]
})
export class DemoTextModule { }
