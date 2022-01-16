import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ArchiveType } from 'src/app/models/enums/archive-tyoe';
import { WebsiteArchiveSingleQuery } from 'src/app/models/wa-single-query';
import { WebsiteArchive } from 'src/app/models/website-archive';
import { WebsiteArchiveService } from 'src/app/services/website-archive.service';

@Component({
  selector: 'app-website-archive-detail',
  templateUrl: './website-archive-detail.component.html',
  styleUrls: ['./website-archive-detail.component.css']
})
export class WebsiteArchiveDetailComponent implements OnInit {
  isLoading: boolean = true;
  title: string = '';
  websiteArchive: WebsiteArchive = {} as WebsiteArchive;
  archiveType: string = '';
  query: WebsiteArchiveSingleQuery = { shortId: '' };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private waService: WebsiteArchiveService) {
    route.params.subscribe(p => {
      this.query.shortId = p['url'];      
    });
  }

  ngOnInit(): void {
    this.waService.getSingle(this.query)
      .subscribe(
        result => {
          if (result.allCount === 1) {
            this.websiteArchive = result.items[0];
            this.title = this.websiteArchive.name;
            if (this.websiteArchive.archiveType == ArchiveType.Pdf) {
              this.archiveType = 'PDF';
            } else if (this.websiteArchive.archiveType == ArchiveType.Png) {
              this.archiveType = 'Image';
            }
          }
          this.isLoading = false;
        },
        err => {
          if (err.status == 404) {
            this.router.navigate(['/']);
          }
        });
  }

}
