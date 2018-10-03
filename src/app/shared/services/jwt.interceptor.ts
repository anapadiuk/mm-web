import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ProgressBarService } from './progress-bar.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(
        private progressBarService: ProgressBarService,
        protected snackbar: MatSnackBar) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.progressBarService.show = true;
        return next.handle(request).do((event: HttpEvent<any>) => {
            if (event instanceof HttpResponse) {
                this.progressBarService.show = false;
            }
        }, (err: any) => {
            this.progressBarService.show = false;
            let message = 'Klaida';
            if (err instanceof HttpErrorResponse) {
                if (err.error && err.error instanceof ProgressEvent) {
                    if (err.error instanceof ProgressEvent) {
                        message = 'Klaida';
                    } else {
                        message = err.error;
                    }
                } else if (err.error instanceof Object) {
                    message = `Klaida.`;
                } else {
                    message = `Klaida. ${err.error}`;
                }
            }
            this.snackbar.open(message, null, { 'panelClass': 'bgc-red-400' });
        });
    }
}
