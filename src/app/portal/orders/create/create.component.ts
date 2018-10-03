import { Component, OnInit, EventEmitter, Output, Inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router'
import { OrdersService } from '../orders.service';
import { Customer } from '../../shared/customer.model';
import { Product } from '../../shared/product.model';

@Component({
    templateUrl: './create.component.html'
})
export class CreateComponent implements OnInit {

    public form: FormGroup = new FormGroup({
        customerId: new FormControl(null, [Validators.required]),
        productId: new FormControl(null, [Validators.required]),
        quantity: new FormControl(null, [Validators.required, Validators.min(1)])
    });

    public customers: Customer[];
    public products: Product[];

    constructor(private service: OrdersService,
        private router: Router,
        private route: ActivatedRoute,
        public dialogRef: MatDialogRef<CreateComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any) { }

    ngOnInit() {
        this.customers = this.data.customers;
        this.products = this.data.products;
    }

    save() {
        if (this.form.invalid) {
            return;
        }
        this.service.create(this.form.value).subscribe(
            () => {
                this.dialogRef.close(true);
            }
        );
    }

}
