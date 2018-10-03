import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { CustomersService } from './customers.service';
import { Customer } from './customer.model';

@Injectable()
export class CustomersResolve implements Resolve<Customer[]> {

    constructor(private service: CustomersService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.service.list();
    }
}
