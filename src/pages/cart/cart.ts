import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Navbar } from 'ionic-angular';

import { DateTimePage } from '../date-time/date-time';
/*
  Generated class for the Cart page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})
export class CartPage {
  
  @ViewChild('navBar') navBar : Navbar;

  shops = [
    'D-Mart', 'Spar Mall'
  ];
  carts = {
      'D-Mart':[
        {
          name: 'Banana',
          cost: 0.33,
          count: 3,
        },
        {
          name: 'Banana',
          cost: 0.33,
          count: 3,
        }
      ],
      'Spar Mall':[
        {
          name: 'Banana',
          cost: 0.33,
          count: 3,
        },
        {
          name: 'Banana',
          cost: 0.33,
          count: 3,
        },
        {
          name: 'Banana',
          cost: 0.33,
          count: 3,
        }
      ]
  };
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }

  ngOnInit(): void {
    this.navBar.setBackButtonText('');
  }

  getItems(shopname){
      return this.carts[shopname];
  }

  increase(item: any){
      item.count += 1;
  }

  decrease(item: any){
      if (item.count == 0) return;
      item.count -= 1;
  }

  gotoDateTimePage(){
      this.navCtrl.push(DateTimePage);
  }
}
