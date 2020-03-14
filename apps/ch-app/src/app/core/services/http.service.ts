import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../../models/Item';

@Injectable({
  providedIn: 'root'
})
export class HTTPService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get<Item[]>('/assets/api/data.json');
  }
}
