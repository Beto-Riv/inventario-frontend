import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Formulario001B12Service {

  urlApi: string = '';
  urlApiPdf: string = '';
  urlLocal: string = '';

  constructor(private httpClient: HttpClient) {
    this.urlApi  = `${environment.baseUrlAPI}${environment.endPoint.formulario.formulario1_b12}`;
  }

  get<T>(id: string): Observable<T> {
    return this.httpClient.get<T>(this.urlApi + id);
  }

  post<T>(data: any): Observable<T> {
    return this.httpClient.post<T>(this.urlApi, data);
  }

  put<T>(data: any): Observable<T> {
    return this.httpClient.put<T>(this.urlApi, data);
  }

  readPostFie(id: number): Observable<any> {
    let htmlOptions = {
      responseType: 'blob' as 'json'
    };
    return this.httpClient.get(this.urlApiPdf + `formulario001_B17?id=${id}`, htmlOptions);
  }
}
