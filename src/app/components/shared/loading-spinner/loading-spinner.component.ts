import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'loading-spinner',
  template: `
    <div *ngIf="isLoading === true" id="mask">
      <i class="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
      <span class="sr-only">Loading...</span>
    </div>
  `,
  styleUrls: ['./loading-spinner.component.css']
})
export class LoadingSpinnerComponent implements OnInit {
  @Input('is-loading') isLoading: boolean;
  
  constructor() { this.isLoading = false; }

  ngOnInit() {
  }

}
