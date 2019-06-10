import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DemoTextComponent } from './demo-text/demo-text.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: DemoTextComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class DemoTextRoutingModule { }
