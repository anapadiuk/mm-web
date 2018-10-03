import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Customer } from './customer.model';
import { environment } from '../../../environments/environment';
import { RestClientService } from '../../shared/services/rest-client.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class CustomersService extends RestClientService<Customer> {

    constructor(protected http: HttpClient, protected snackbar: MatSnackBar) {
        super(http, snackbar, environment.endpoint + '/customers');
    }
}
