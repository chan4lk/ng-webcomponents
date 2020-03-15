import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../../models/Item';
import { environment } from '@chan4lk/ch-app/src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HTTPService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<Item[]>(environment.dataAPI);
  }
}
