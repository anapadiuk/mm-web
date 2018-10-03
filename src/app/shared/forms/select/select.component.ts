import { Component, forwardRef, Input, OnChanges, Injector } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputGenericComponent } from '../generic.component';

@Component({
    selector: 'app-select',
    templateUrl: './select.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SelectComponent),
            multi: true
        }
    ]
})
export class SelectComponent extends InputGenericComponent implements OnChanges {
    @Input() public placeholder = null;
    @Input() public items: any[] = [];
    @Input() public label = 'name';
    @Input() public id = 'id';
    @Input() public defaultLabel = null;
    @Input() public multiple = false;
    @Input() public cssClass: string;
    @Input() public disabled = false;
    public mappedItems: any[] = [];
    constructor(injector: Injector) {
        super(injector);
    }

    ngOnChanges() {
        if (this.items) {
            this.mappedItems = this.items.map(item => {
                return { value: item[this.id], label: item[this.label] }
            });
        }
    }

    setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }
}
