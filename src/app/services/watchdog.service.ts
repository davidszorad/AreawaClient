import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { HelpersService } from './helpers.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { WatchdogQuery } from '../models/watchdog-query';

@Injectable({
  providedIn: 'root'
})
export class WatchdogService {
  private readonly wdEndpoint = `${environment.apiRoot}/watchdog`;

  constructor(
    private http: HttpClient,
    private helpersService: HelpersService,
    private authService: AuthService) { }

  getList(filter: WatchdogQuery) : Observable<any> {
    //let header = new HttpHeaders({ "Authorization": "Bearer "+token});
    let header = new HttpHeaders().set('X-ApiKey', this.authService.getApiKey());
    const requestOptions = {  headers: header };

    return this.http.post(`${this.wdEndpoint}/search`, filter, requestOptions)
      .pipe(map(res => res));
  }

  // getSingle(filter: WatchdogSingleQuery) : Observable<any> {
  //   let header = new HttpHeaders().set('X-ApiKey', this.authService.getApiKey());
  //   const requestOptions = {  headers: header };

  //   return this.http.post(`${this.waEndpoint}/search`, filter, requestOptions)
  //     .pipe(map(res => res));
  // }
}
