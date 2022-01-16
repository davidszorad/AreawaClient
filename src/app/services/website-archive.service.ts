import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HelpersService } from './helpers.service';
import { map } from 'rxjs/operators';
import { WebsiteArchiveQuery } from '../models/wa-query';
import { Observable } from 'rxjs';
import { WebsiteArchiveSingleQuery } from '../models/wa-single-query';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class WebsiteArchiveService {
  private readonly waEndpoint = `${environment.apiRoot}/wa`;

  constructor(
    private http: HttpClient,
    private helpersService: HelpersService,
    private authService: AuthService) { }

  getList(filter: WebsiteArchiveQuery) : Observable<any> {
    //let header = new HttpHeaders({ "Authorization": "Bearer "+token});
    let header = new HttpHeaders().set('X-ApiKey', this.authService.getApiKey());
    const requestOptions = {  headers: header };

    return this.http.post(`${this.waEndpoint}/search`, filter, requestOptions)
      .pipe(map(res => res));
  }

  getSingle(filter: WebsiteArchiveSingleQuery) : Observable<any> {
    let header = new HttpHeaders().set('X-ApiKey', this.authService.getApiKey());
    const requestOptions = {  headers: header };

    return this.http.post(`${this.waEndpoint}/search`, filter, requestOptions)
      .pipe(map(res => res));
  }
}
