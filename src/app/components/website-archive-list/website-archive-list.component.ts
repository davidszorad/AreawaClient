import { Component, OnInit } from '@angular/core';
import { SortBy } from 'src/app/models/enums/sort-by';
import { WebsiteArchiveQuery } from 'src/app/models/wa-query';
import { WebsiteArchiveService } from 'src/app/services/website-archive.service';

@Component({
  selector: 'app-website-archive-list',
  templateUrl: './website-archive-list.component.html',
  styleUrls: ['./website-archive-list.component.css']
})
export class WebsiteArchiveListComponent implements OnInit {
  private readonly PAGE_SIZE = 25;
  isLoading: boolean = true;
  title: string;
  queryResult: any = {};
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

  constructor(private waService: WebsiteArchiveService) { 
    this.title = "Website Archive";
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
    this.waService.getList(this.query)
      .subscribe(result => {
        this.queryResult = result;
        this.isLoading = false;
      });
  }

}
