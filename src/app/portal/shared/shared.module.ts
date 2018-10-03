import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersService } from './customers.service';
import { ProductsService } from './products.service';
import { CustomersResolve } from './customers.resolve';
import { ProductsResolve } from './products.resolve';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [],
    providers: [
        CustomersService,
        ProductsService,
        CustomersResolve,
        ProductsResolve
    ]
})
export class SharedModule { }
