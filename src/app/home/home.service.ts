import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Injectable()
export class HomeService  {

  protected urlAllCosts   : string = 'https://eduardo-andrade.outsystemscloud.com/RestExposureSvc/rest/restapi/list';
  protected urlOffensors  : string = 'https://eduardo-andrade.outsystemscloud.com/RestExposureSvc/rest/restapi/list';
  protected urlSavers     : string = 'https://eduardo-andrade.outsystemscloud.com/RestExposureSvc/rest/restapi/list';


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
