import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';

import { OrdersResolve } from './orders.resolve';
import { CustomersResolve } from '../shared/customers.resolve';
import { ProductsResolve } from '../shared/products.resolve';

import { OrdersComponent } from './orders.component';
import { ListComponent } from './list/list.component';

export const routes: Routes = [
    {
        path: '',
        component: OrdersComponent,
        children: [
            {
                path: 'list',
                component: ListComponent,
                resolve: {
                    orders: OrdersResolve
                }
            },
            { path: '', redirectTo: 'list', pathMatch: 'full' }
        ],
        resolve: {
            products: ProductsResolve,
            customers: CustomersResolve
        }
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OrdersRoutingModule { }


