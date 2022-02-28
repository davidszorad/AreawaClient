import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Watchdog } from 'src/app/models/watchdog';
import { WatchdogSingleQuery } from 'src/app/models/watchdog-single-query';
import { WatchdogService } from 'src/app/services/watchdog.service';

@Component({
  selector: 'app-watchdog-detail',
  templateUrl: './watchdog-detail.component.html',
  styleUrls: ['./watchdog-detail.component.css']
})
export class WatchdogDetailComponent implements OnInit {
  isLoading: boolean = true;
  title: string = '';
  watchdog: Watchdog = {} as Watchdog;
  query: WatchdogSingleQuery = { publicId: '' };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private wdService: WatchdogService,
    private sanitizer: DomSanitizer) {
    route.params.subscribe(p => {
      this.query.publicId = p['url'];
    });
  }

  ngOnInit(): void {
    this.wdService.getSingle(this.query)
      .subscribe(
        result => {
          if (result.allCount === 1) {
            this.watchdog = result.items[0];
            this.title = this.watchdog.name;
          }
          this.isLoading = false;
          this.scrollToTop();
        },
        err => {
          if (err.status == 404) {
            this.router.navigate(['/']);
          }
        });
  }

  scrollToTop() {
    (function smoothscroll() {
      window.scrollTo(0, 0);
    })();
  }

}
