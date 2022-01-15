import { 
	Component,
	Input, 
	Output, 
	EventEmitter}     from '@angular/core';
import { OnChanges } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
	selector: 'pagination',
	styleUrls: ['./pagination.component.css'],
    template: `
    	<nav *ngIf="totalItems > pageSize">
			<ul class="pagination">
				<li class="page-item" [class.disabled]="currentPage == 1">
					<a class="page-link" (click)="previous()" aria-label="Previous">
						<span aria-hidden="true">&laquo;</span>
						<span class="sr-only">Previous</span>
					</a>
				</li>
				<li class="page-item" [class.active]="currentPage == page" *ngFor="let page of pages" (click)="changePage(page)">
					<a class="page-link">{{ page }}</a>
				</li>
				<li class="page-item" [class.disabled]="currentPage == pages.length">
					<a class="page-link" (click)="next()" aria-label="Next">
						<span aria-hidden="true">&raquo;</span>
						<span class="sr-only">Next</span>
					</a>
				</li>
			</ul>
    	</nav>
	`
})
export class PaginationComponent implements OnChanges {
  	@Input('total-items') totalItems: any;
	@Input('page-size') pageSize = 10;
	@Input('page') page = 1;
	@Output('page-changed') pageChanged = new EventEmitter();
	pages: any[] = [];
	currentPage = this.page;

	ngOnChanges() {
    	this.currentPage = this.page;
        
		var pagesCount = Math.ceil(this.totalItems / this.pageSize); 
		this.pages = [];
		for (var i = 1; i <= pagesCount; i++)
			this.pages.push(i);

		if (!environment.production) {
			console.log(this);
		}
	}

	changePage(page: number){
		this.currentPage = page; 
		this.pageChanged.emit(page);
	}

	previous(){
		if (this.currentPage == 1)
			return;

		this.currentPage--;
		this.pageChanged.emit(this.currentPage);
	}

	next(){
		if (this.currentPage == this.pages.length)
			return; 
		
		this.currentPage++;
		if (!environment.production) {
			console.log("next", this);
		}
		this.pageChanged.emit(this.currentPage);
	}
}