import { Component, OnInit } from '@angular/core';
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
  query: any = {
    page: 1,
    pageSize: this.PAGE_SIZE,
    isSortAscending: false,
    sortBy: 'dateUpdated'
  };
  columns = [
    { title: 'Name', key: 'name', isSortable: true, width: null, icon: null },
    { title: 'Description', key: 'description', isSortable: false, width: null, icon: null },
    { title: 'Category', key: 'category', isSortable: false, width: null, icon: null },
    { title: 'Created', key: 'dateCreated', isSortable: true, width: 'modified-width', icon: null },
    { title: 'Updated', key: 'dateUpdated', isSortable: true, width: 'modified-width', icon: null },
    { title: '', key: 'status', isSortable: true, width: 'status-width', icon: 'globe' }
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
      isSortAscending: false,
      sortBy: 'dateUpdated'
    };
    this.populatePosts();
  }

  sortBy(columnName: string) {
    if (this.query.sortBy === columnName) {
      this.query.isSortAscending = !this.query.isSortAscending;
    } else {
      this.query.sortBy = columnName;
      this.query.isSortAscending = true;
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
