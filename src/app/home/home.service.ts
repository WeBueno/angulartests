import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Injectable()
export class HomeService  {

  protected urlAllCosts   : string = 'https://outsystems-dev.renault.br/DashboardCosts/rest/API/measure?DateTimeBegin=2014-12-31T23:59:59.938Z&DateTimeEnd=2019-12-31T23:59:59.938Z';
  protected urlOffensors  : string = 'https://outsystems-dev.renault.br/DashboardCosts/rest/API/measureOffensors';
  protected urlSavers     : string = 'https://outsystems-dev.renault.br/DashboardCosts/rest/API/measureSavers';


  constructor(private http: HttpClient, public sanitizer: DomSanitizer) {}

  //FIXME Necessário informar por parâmetro as datas de controle

  //Read all total costs from last 3 months
  getAllCosts() {
    return this.http
      .get<any[]>(this.urlAllCosts)
      .pipe(map(data => data));
  }

  //Read top 10 cc/users offensor from this month
  getOffensors() {
    return this.http
      .get<any[]>(this.urlOffensors)
      .pipe(map(data => data));
  }

  //Read top 10 cc/users savers from this month
  getSavers() {
    return this.http
      .get<any[]>(this.urlSavers)
      .pipe(map(data => data));
  }

}
