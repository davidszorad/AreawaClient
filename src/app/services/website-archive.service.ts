import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HelpersService } from './helpers.service';
import { map } from 'rxjs/operators';
import { WebsiteArchiveQuery } from '../models/wa-query';

@Injectable({
  providedIn: 'root'
})
export class WebsiteArchiveService {
  private readonly waEndpoint = `${environment.apiRoot}/wa`;

  constructor(private http: HttpClient, private helpersService: HelpersService) { }

  getList(filter: WebsiteArchiveQuery) {
    //let header = new HttpHeaders({ "Authorization": "Bearer "+token});
    let header = new HttpHeaders().set('X-ApiKey', '');
    const requestOptions = {  headers: header };

    return this.http.post(`${this.waEndpoint}/search`, filter, requestOptions)
      .pipe(map(res => res));
  }
}
