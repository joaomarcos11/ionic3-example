import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Response } from '@angular/http';

import { TestPage } from '../test/test';
import 'rxjs/add/operator/map';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // private url: string = '';
  private url: string = 'https://ranekapi.origamid.dev/json/api/produto/';
  public produtos: Array<{}>;

  constructor(
    public navCtrl: NavController,
    public http: Http,
  ) {
    this.http.get(this.url)
             .map(res => res.json())
             .subscribe(data => {
                this.produtos = data;
            });
  }
  getProdutosInfo(id) {
    this.navCtrl.push(TestPage,
      {
        'produto_id': id,
        'api_url': this.url
      });
  }
}
