import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PortalRoutingModule } from './portal-routing.module';
import { PortalComponent } from './portal.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    PortalRoutingModule,
    SharedModule
  ],
  declarations: [PortalComponent]
})
export class PortalModule { }
