import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProgressBarService } from './services/progress-bar.service';
import { InputTextComponent } from './forms/input-text/input-text.component';
import { SelectComponent } from './forms/select/select.component';

import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';
import {
    MatButtonModule, MatListModule, MatIconModule, MatCardModule, MatMenuModule, MatInputModule, MatButtonToggleModule,
    MatProgressSpinnerModule, MatSelectModule, MatSlideToggleModule, MatDialogModule, MatSnackBarModule, MatToolbarModule,
    MatTabsModule, MatSidenavModule, MatTooltipModule, MatRippleModule, MatRadioModule, MatGridListModule,
    MatDatepickerModule, MatNativeDateModule, MatSliderModule, MatAutocompleteModule, MatChipsModule, MatProgressBarModule,
    MatDividerModule, MatCheckboxModule, MatTableModule
} from '@angular/material';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

import { JwtInterceptor } from './services/jwt.interceptor';
import { ConfirmComponent } from './dialogs/confirm/confirm.component';
@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        FlexLayoutModule,

        MatButtonModule,
        MatListModule,
        MatIconModule,
        MatCardModule,
        MatMenuModule,
        MatInputModule,
        MatSelectModule,
        MatButtonToggleModule,
        MatSlideToggleModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        MatSnackBarModule,
        MatToolbarModule,
        MatTabsModule,
        MatSidenavModule,
        MatTooltipModule,
        MatRippleModule,
        MatRadioModule,
        MatGridListModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSliderModule,
        MatAutocompleteModule,
        MatChipsModule,
        MatProgressBarModule,
        MatDividerModule,
        MatCheckboxModule,
        MatTableModule
    ],
    exports: [
        FlexLayoutModule,
        MatButtonModule,
        MatListModule,
        MatIconModule,
        MatCardModule,
        MatMenuModule,
        MatInputModule,
        MatSelectModule,
        MatButtonToggleModule,
        MatSlideToggleModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        MatSnackBarModule,
        MatToolbarModule,
        MatTabsModule,
        MatSidenavModule,
        MatTooltipModule,
        MatRippleModule,
        MatRadioModule,
        MatGridListModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSliderModule,
        MatAutocompleteModule,
        MatChipsModule,
        MatProgressBarModule,
        MatDividerModule,
        MatCheckboxModule,
        MatTableModule,
        InputTextComponent,
        SelectComponent,
        ConfirmComponent
    ],
    declarations: [
        InputTextComponent,
        SelectComponent,
        ConfirmComponent
    ],
    entryComponents: [
        ConfirmComponent
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: JwtInterceptor,
            multi: true
        },
        {
            provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
            useValue: {
                duration: 5000,
                verticalPosition: 'top',
                horizontalPosition: 'center',
                action: false,
                panelClass: []
            }
        },
    ]
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [
                ProgressBarService
            ]
        }
    }
}

