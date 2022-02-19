import { Component, OnInit } from '@angular/core';
import { SortBy } from 'src/app/models/enums/sort-by';
import { Watchdog } from 'src/app/models/watchdog';
import { WatchdogQuery } from 'src/app/models/watchdog-query';
import { WatchdogService } from 'src/app/services/watchdog.service';

@Component({
  selector: 'app-watchdog-list',
  templateUrl: './watchdog-list.component.html',
  styleUrls: ['./watchdog-list.component.css']
})
export class WatchdogListComponent implements OnInit {
  private readonly PAGE_SIZE = 25;
  isLoading: boolean = true;
  title: string;
  retryPeriod: string[] = ["", "week", "1 month", "3 months", "year"];
  watchdogs: Watchdog[] = [];
  allItemsCount: number = 0;
  query: WatchdogQuery = {
    page: 1,
    pageSize: this.PAGE_SIZE,
    isSortDescending: true,
    sortBy: SortBy.Date
  };
  columns = [
    { title: 'Name', key: SortBy.Name, isSortable: true, width: null, icon: null },
    { title: 'Url', key: SortBy.Default, isSortable: false, width: null, icon: null },
    { title: 'Retry period', key: SortBy.Default, isSortable: false, width: 'modified-width', icon: null },
    { title: 'Scan count', key: SortBy.Default, isSortable: false, width: 'modified-width', icon: null },
    { title: 'Created', key: SortBy.Date, isSortable: true, width: 'modified-width', icon: null },
    { title: '', key: SortBy.Status, isSortable: true, width: 'status-width', icon: 'bolt' }
  ];

  constructor(private wdService: WatchdogService) { 
    this.title = "Watchdog";
    this.resetFilter();
  }

  ngOnInit(): void {
  }

  onFilterChange() {
    this.query.page = 1;
    this.populatePosts();
  }

  onPageChange(page: number) {
    this.query.page = page;
    this.populatePosts();
  }

  resetFilter() {
    this.query = {
      page: 1,
      pageSize: this.PAGE_SIZE,
      isSortDescending: true,
      sortBy: SortBy.Date
    };
    this.populatePosts();
  }

  sortBy(columnName: SortBy) {
    if (this.query.sortBy === columnName) {
      this.query.isSortDescending = !this.query.isSortDescending;
    } else {
      this.query.sortBy = columnName;
      this.query.isSortDescending = true;
    }
    this.populatePosts();
  }

  scrollToTop() { 
    (function smoothscroll() {
      var currentScroll = document.documentElement.scrollTop || document.body.scrollTop; 
      if (currentScroll > 0) {
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, currentScroll - (currentScroll / 5));
      }
    })();
  }

  private populatePosts() {
    this.isLoading = true;
    this.scrollToTop();
    this.wdService.getList(this.query)
      .subscribe(result => {
        this.watchdogs = result.items;
        this.allItemsCount = result.allCount;
        this.isLoading = false;
      });
  }

}
