import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../shared/services/dashboard.service';
import { Book } from '../shared/models/book.model';
import { MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  displayedColumns: string[] = ['id', 'content', 'img', 'created', 'updated', 'author', 'publisher'];
  dataSource: MatTableDataSource<Book>;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private dashboardService: DashboardService) { }

  ngOnInit() {
    this.getDataBook();
  }

  public getDataBook(): void {
    this.dashboardService.getData().subscribe((res: Book[]) => {
      this.dashboardService.setDataFull(res);
      this.dataSource = new MatTableDataSource(res);
      this.setMatTableData(res);
    });
  }

  public onSearch(search: string): void {
    this.setMatTableData(this.dashboardService.filterSearch(this.dataSource, search));
  }

  private setMatTableData(books: Book[]): void {
    this.dataSource = new MatTableDataSource(books);
    this.dataSource.sort = this.sort;
  }

}
