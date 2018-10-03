import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material';
import { Order } from '../order.model';
import { CreateComponent } from '../create/create.component';
import { ConfirmComponent } from '../../../shared/dialogs/confirm/confirm.component';
import { OrdersService } from '../orders.service';
import { Customer } from '../../shared/customer.model';
import { Product } from '../../shared/product.model';
import { OrdersResolve } from '../orders.resolve';

@Component({
    templateUrl: './list.component.html'
})

export class ListComponent implements OnInit {

    public orders: Order[];
    public customers: Customer[];
    public products: Product[];
    public editingOrder: Order;
    displayedColumns: string[] = ['id', 'customerName', 'productName', 'quantity', 'update', 'delete'];

    constructor(
        private route: ActivatedRoute,
        public dialog: MatDialog,
        private service: OrdersService,
        private resolve: OrdersResolve) { }

    ngOnInit() {
        this.orders = this.route.snapshot.data['orders'];
        this.customers = this.route.parent.snapshot.data['customers'];
        this.products = this.route.parent.snapshot.data['products'];
    }

    public delete(order: Order) {
        const dialogRef = this.dialog.open(ConfirmComponent, {
            width: '250px'
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.service.delete(order.id).subscribe(
                    (deletedOrder: Order) => {
                        this.orders = this.orders.filter(order => order.id !== deletedOrder.id);
                    }
                )
            }
        });
    }

    public openCreateDialog() {
        const dialogRef = this.dialog.open(CreateComponent, {
            data: {
                products: this.products,
                customers: this.customers
            }
        });
        dialogRef.afterClosed().subscribe(result => {
            if (result) {
                this.loadOrders();
            }
        });
    }

    public edit(order: Order) {
        this.editingOrder = Object.assign({}, order);
    }

    public update(editingOrder: Order) {
        this.service.update(editingOrder.id, editingOrder).subscribe(
            () => {
                this.orders.find(x => x.id === editingOrder.id).quantity = editingOrder.quantity;
                this.editingOrder = null;
            }
        );
    }

    private loadOrders() {
        this.resolve.resolve(this.route.snapshot).subscribe(orders => {
            this.orders = orders;
        });
    }
}
