import { Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { MatSnackBar } from '@angular/material/snack-bar';

export class RestClientService<T> {

    protected jsonHttpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        })
    };

    constructor(protected http: HttpClient, protected snackbar: MatSnackBar, protected endpoint: string) {

    }

    public list(id?: number): Observable<T[]> {
        let url = this.endpoint;
        if (id) {
            url = `${this.endpoint}/${id}`
        }
        return this.http.get<T[]>(url);
    }

    public get(id: number): Observable<T> {
        return this.http.get<T>(`${this.endpoint}/${id}`);
    }

    public create(data: T): Observable<T> {
        return this.http.post<T>(this.endpoint, data).do(() => this.showSuccessSave());
    }

    public update(id: number, data: T): Observable<T> {
        return this.http.put<T>(`${this.endpoint}/${id}`, data).do(() => this.showSuccessSave());
    }

    public delete(id: number): Observable<T> {
        return this.http.delete<T>(`${this.endpoint}/${id}`).do(() => this.showSuccessDelete());
    }


    protected showSuccessSave() {
        this.snackbar.open('Sėkmingai išaugota');
    }

    protected showSuccessDelete() {
        this.snackbar.open('Sėkmingai ištrinta');
    }
}
