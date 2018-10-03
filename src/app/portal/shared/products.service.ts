import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';
import { environment } from '../../../environments/environment';
import { RestClientService } from '../../shared/services/rest-client.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class ProductsService extends RestClientService<Product> {

    constructor(protected http: HttpClient, protected snackbar: MatSnackBar) {
        super(http, snackbar, environment.endpoint + '/products');
    }
}
