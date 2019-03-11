import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'http://localhost:3000/';
const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
      })
    };

@Injectable({
  providedIn: 'root'
})
export class RestService {

  public extractData(res: Response) {
    const body = res;
    return body || { };
  }

  constructor(private http: HttpClient) { }

  getClientes(): Observable<any> {
    return this.http.get(endpoint + 'clientes').pipe(
      map(this.extractData));
  }

  getCliente(id): Observable<any> {
    return this.http.get(endpoint + 'clientes/' + id).pipe(
      map(this.extractData));
  }
  addCliente(cliente): Observable<any> {
    console.log(cliente);
    return this.http.post<any>(endpoint + 'clientes', JSON.stringify(cliente), httpOptions).pipe(
      // tslint:disable-next-line:no-shadowed-variable
      tap((cliente) => console.log(`added cliente w/ id=${cliente.id}`)),
      catchError(this.handleError<any>('addCliente'))
    );
  }

  updateCliente(id, cliente): Observable<any> {
    return this.http.put(endpoint + 'clientes/' + id, JSON.stringify(cliente), httpOptions).pipe(
      tap(_ => console.log(`updated cliente id=${id}`)),
      catchError(this.handleError<any>('updateCliente'))
    );
  }

  deleteCliente(id): Observable<any> {
    return this.http.delete<any>(endpoint + 'clientes/' + id, httpOptions).pipe(
      tap(_ => console.log(`deleted cliente id=${id}`)),
      catchError(this.handleError<any>('deleteCliente'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
