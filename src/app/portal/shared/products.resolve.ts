import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { ProductsService } from './products.service';
import { Product } from './product.model';

@Injectable()
export class ProductsResolve implements Resolve<Product[]> {

    constructor(private service: ProductsService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.service.list();
    }
}
