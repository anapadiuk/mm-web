import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

import { PortalComponent } from './portal.component';

export const routes: Routes = [
    {
        path: '',
        component: PortalComponent,
        children: [
            { 
                path: 'orders', 
                loadChildren: './orders/orders.module#OrdersModule' 
            },
            {
                path: '',
                redirectTo: 'orders',
                pathMatch: 'full'
            }
        ]
    },
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PortalRoutingModule { }


