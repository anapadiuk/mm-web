import { Component, forwardRef, Input, OnInit, Injector } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { InputGenericComponent } from '../generic.component';


@Component({
    selector: 'app-input-text',
    templateUrl: './input-text.component.html',
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => InputTextComponent),
            multi: true
        }
    ]
})
export class InputTextComponent extends InputGenericComponent implements OnInit {
    @Input() public placeholder = null;
    @Input() public type = 'text';
    @Input() public disabled = false;
    constructor(injector: Injector) {
        super(injector);
    }

    public setDisabledState(isDisabled: boolean): void {
        this.disabled = isDisabled;
    }
}
