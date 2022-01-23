import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-watchdog-list',
  templateUrl: './watchdog-list.component.html',
  styleUrls: ['./watchdog-list.component.css']
})
export class WatchdogListComponent implements OnInit {
  private readonly PAGE_SIZE = 25;
  isLoading: boolean = true;
  title: string;
  watchdogs: WebsiteArchive[] = [];
  allItemsCount: number = 0;
  query: WebsiteArchiveQuery = {
    page: 1,
    pageSize: this.PAGE_SIZE,
    isSortDescending: true,
    sortBy: SortBy.Date
  };
  columns = [
    { title: 'Name', key: SortBy.Name, isSortable: true, width: null, icon: null },
    { title: 'Description', key: SortBy.Default, isSortable: false, width: null, icon: null },
    { title: 'Category', key: SortBy.Default, isSortable: false, width: null, icon: null },
    { title: 'Updated', key: SortBy.Date, isSortable: true, width: 'modified-width', icon: null },
    { title: '', key: SortBy.Status, isSortable: true, width: 'status-width', icon: 'globe' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
