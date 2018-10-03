import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { OrdersRoutingModule } from './orders-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { SharedModule as PortalSharedModule } from '../shared/shared.module';

import { OrdersService } from './orders.service';
import { OrdersResolve } from './orders.resolve';

import { OrdersComponent } from './orders.component';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule, 
        ReactiveFormsModule,
        OrdersRoutingModule,
        SharedModule,
        PortalSharedModule
    ],
    declarations: [
        OrdersComponent,
        CreateComponent,
        ListComponent
    ],
    providers: [
        OrdersService, 
        OrdersResolve
    ], 
    entryComponents: [
        CreateComponent
    ]
})
export class OrdersModule { }
