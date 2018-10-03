import { Injector, OnInit } from '@angular/core';
import {
    ControlValueAccessor, FormControl, NgControl, NgForm, FormGroupDirective
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

export class InputGenericComponent implements ControlValueAccessor, OnInit {
    protected _value: any;
    public formControl: NgControl;
    public matcher: FieldErrorStateMatcher;
    public propagateTouch: any;
    public placeholder = null;

    constructor(protected injector: Injector) { }

    public ngOnInit(): void {
        this.formControl = this.injector.get(NgControl, null);
        this.matcher = new FieldErrorStateMatcher(this.formControl);
    }

    public disable() {
    }

    public getError() {
        if (!this.formControl) {
            return null;
        }
        if (this.formControl.hasError('required')) {
            return `Laukas '${this.placeholder}' yra privalomas`;
        };
        if (this.formControl.hasError('minlength')) {
            const e = this.formControl.getError('minlength');
            return `Minimlus lauko '${this.placeholder}' dydis turi būti ${e.requiredLength}`;
        };
        if (this.formControl.hasError('email')) {
            return `Neteisingas el. pašto formatas`;
        };
        if (this.formControl.hasError('max')) {
            const e = this.formControl.getError('max');
            return `Maksimalus lauko '${this.placeholder}' dydis turi būti ${e.max}`;
        };
        if (this.formControl.hasError('min')) {
            const e = this.formControl.getError('min');
            return `Minimlus lauko '${this.placeholder}' dydis turi būti ${e.min}`;
        };
        return this.formControl.errors;
    }

    /**
     * Value accessor methods
     */
    public set value(v: any) {
        this._value = v;
        this.propagateChange(v);
    }

    public get value(): any {
        return this._value;
    }

    public writeValue(obj: any): void {
        this._value = obj;
        this.valueChanged();
    }

    public registerOnChange(fn: any): void {
        this.propagateChange = fn;
    }

    public registerOnTouched(fn: any): void {
        this.propagateTouch = fn;
    }

    public onTouch(e) {
        this.propagateTouch(e);
    }

    protected propagateChange = (_: any) => { };

    protected valueChanged() { }
}

export class FieldErrorStateMatcher implements ErrorStateMatcher {

    constructor(private control) { }

    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
        const isSubmitted = form && form.submitted;
        return !!(this.control && this.control.invalid && (this.control.dirty || this.control.touched || isSubmitted));
    }
}
