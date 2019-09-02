import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Item } from '../models/item';

@Injectable({
  providedIn: 'root'
})
export class ItemDataService {
  subject: Subject<Item[]> = new Subject();
  items$ = this.subject.asObservable();
  private url = 'http://frontend-recruitment.one2tribe.pl:8080/api/v1/item';

  constructor(private http: HttpClient) {}

  getAllItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.url).pipe(data => (this.items$ = data));
  }

  addItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.url, item);
  }
}
