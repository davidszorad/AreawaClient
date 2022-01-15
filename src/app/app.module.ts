import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { WebsiteArchiveListComponent } from './components/website-archive-list/website-archive-list.component';
import { WebsiteArchiveCreateComponent } from './components/website-archive-create/website-archive-create.component';
import { WatchdogCreateComponent } from './components/watchdog-create/watchdog-create.component';
import { WatchdogDetailComponent } from './components/watchdog-detail/watchdog-detail.component';
import { WatchdogListComponent } from './components/watchdog-list/watchdog-list.component';
import { WebsiteArchiveCategoryComponent } from './components/website-archive-category/website-archive-category.component';
import { WebsiteArchiveCategoryEditComponent } from './components/website-archive-category-edit/website-archive-category-edit.component';
import { WebsiteArchiveDetailComponent } from './components/website-archive-detail/website-archive-detail.component';
import { WebsiteArchiveEditComponent } from './components/website-archive-edit/website-archive-edit.component';
import { NavmenuComponent } from './components/navmenu/navmenu.component';
import { LoadingSpinnerComponent } from './components/shared/loading-spinner/loading-spinner.component';
import { PaginationComponent } from './components/shared/pagination/pagination.component';
import { ToasterComponent } from './components/shared/toaster/toaster.component';

@NgModule({
  declarations: [
    AppComponent,
    NavmenuComponent,
    WatchdogCreateComponent,
    WatchdogDetailComponent,
    WatchdogListComponent,
    WebsiteArchiveListComponent,
    WebsiteArchiveCreateComponent,
    WebsiteArchiveCategoryComponent,
    WebsiteArchiveCategoryEditComponent,
    WebsiteArchiveDetailComponent,
    WebsiteArchiveEditComponent,
    LoadingSpinnerComponent,
    PaginationComponent,
    ToasterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
