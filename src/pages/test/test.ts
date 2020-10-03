import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { Http } from '@angular/http';
/**
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {
  public produto: any = {};

  constructor(
              public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController,
              public http: Http) {

        let url = this.navParams.get('api_url');
        let produto_id = this.navParams.get('produto_id');

        // alert(url + produto_id);

        this.http.get(url + produto_id)
        .map(res => res.json())
        .subscribe(data => {
          console.log(data);
          this.produto = data;
       });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }

  // showAlert() {
  //   const alert = this.alertCtrl.create({
  //     title: 'Mensagem',
  //     subTitle: 'Você logou!',
  //     buttons: ['OK']
  //   });
  //   alert.present();
  // }
}
