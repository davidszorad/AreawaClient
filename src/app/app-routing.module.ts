import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { WatchdogCreateComponent } from './components/watchdog-create/watchdog-create.component';
import { WatchdogDetailComponent } from './components/watchdog-detail/watchdog-detail.component';
import { WatchdogListComponent } from './components/watchdog-list/watchdog-list.component';
import { WebsiteArchiveCategoryEditComponent } from './components/website-archive-category-edit/website-archive-category-edit.component';
import { WebsiteArchiveCategoryComponent } from './components/website-archive-category/website-archive-category.component';
import { WebsiteArchiveCreateComponent } from './components/website-archive-create/website-archive-create.component';
import { WebsiteArchiveDetailComponent } from './components/website-archive-detail/website-archive-detail.component';
import { WebsiteArchiveEditComponent } from './components/website-archive-edit/website-archive-edit.component';
import { WebsiteArchiveListComponent } from './components/website-archive-list/website-archive-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'website-archive', pathMatch: 'full' },

  { path: 'login', component: LoginComponent },
  
  { path: 'website-archive', component: WebsiteArchiveListComponent },
  { path: 'website-archive/:url', component: WebsiteArchiveDetailComponent },
  { path: 'website-archive/create', component: WebsiteArchiveCreateComponent },
  { path: 'website-archive/edit/:url', component: WebsiteArchiveEditComponent },
  { path: 'website-archive/category', component: WebsiteArchiveCategoryComponent },
  { path: 'website-archive/category/:url', component: WebsiteArchiveCategoryEditComponent },

  { path: 'watchdog', component: WatchdogListComponent },
  { path: 'watchdog/:url', component: WatchdogDetailComponent },
  { path: 'watchdog/create', component: WatchdogCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
