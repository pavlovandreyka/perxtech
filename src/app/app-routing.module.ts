import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './landing/landing.module#LandingModule'
  },
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule'
  },
  {
    path: 'demo-text',
    loadChildren: './demo-text/demo-text.module#DemoTextModule'
  },
  {
    path: '**',
    redirectTo: 'dashboard'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
