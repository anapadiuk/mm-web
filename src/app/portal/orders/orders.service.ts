import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Order } from './order.model';
import { environment } from '../../../environments/environment';
import { RestClientService } from '../../shared/services/rest-client.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class OrdersService extends RestClientService<Order> {

    constructor(protected http: HttpClient, protected snackbar: MatSnackBar) {
        super(http, snackbar, environment.endpoint + '/orders');
    }
}
