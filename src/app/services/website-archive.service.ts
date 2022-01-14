import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HelpersService } from './helpers.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WebsiteArchiveService {
  private readonly waEndpoint = environment.apiRoot + '/wa';

  constructor(private http: HttpClient, private helpersService: HelpersService) { }

  getList(filter: any) {
    //let header = new HttpHeaders({ "Authorization": "Bearer "+token});
    let header = new HttpHeaders().set('X-ApiKey', '');
    const requestOptions = {  headers: header };

    return this.http.post(`${this.waEndpoint}/search`, {}, requestOptions)
      .pipe(map(res => res));
  }
}
