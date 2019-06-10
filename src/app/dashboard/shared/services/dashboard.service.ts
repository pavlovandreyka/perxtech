import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from '../models/book.model';
import { map } from 'rxjs/operators';
import { MatTableDataSource } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private dataFull: Book[];
  constructor(private http: HttpClient) { }

  public getData(): Observable<Book[]> {
    return this.http.get('assets/data/data.json')
      .pipe(map((res: any) => res.data));
  }

  public filterSearch(data: MatTableDataSource<Book>, search: string): Book[] {

    if (search === '') {
      return this.dataFull;
    }

    return this.filer(search);
  }

  public setDataFull(data: Book[]): void {
    if (data) {
      this.dataFull = data;
    }
  }
  private filer(search: string): Book[] {
    return this.dataFull.filter((ele: Book) => {
      if (ele.attributes.content.toLocaleLowerCase().includes(search.toLocaleLowerCase())) {
        return ele;
      }
    });
  }


}
