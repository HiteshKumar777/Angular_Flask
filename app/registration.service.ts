import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  _url = 'http://localhost:5000';
  constructor(private _http: HttpClient) { }

  registerfirst(data: Response)
  {
    return this._http.post(this._url, JSON.stringify(data));
  }
}
