import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { OrdersService } from './orders.service';
import { Order } from './order.model';

@Injectable()
export class OrdersResolve implements Resolve<Order[]> {

    constructor(private service: OrdersService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.service.list();
    }
}
