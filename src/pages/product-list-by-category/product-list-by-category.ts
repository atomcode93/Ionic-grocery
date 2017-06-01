import {Component} from '@angular/core';
import {NavController, NavParams, App} from 'ionic-angular';

import { ProductDetailsPage } from '../product-details/product-details';

/*
  Generated class for the ProductListByCategory page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-product-list-by-category',
  templateUrl: 'product-list-by-category.html'
})
export class ProductListByCategory {
  productItems = {
    'beverages': [
      {
        name: 'Banana',
        cost: 0.33,
        count: 3,
      }
    ],
    'bread-basket': [
      {
        name: 'Banana',
        cost: 0.33,
        count: 2,
      }, 
      {
        name: 'Tomato',
        cost: 0.33,
        count: 3,
      }
    ]
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private app: App) {}

  ngOnInit():void {
    // console.log(this.navParams.data);
  }
  getItems(category) {
    // console.log(category.category);
    return this.productItems[category.category];
  }

  increase(item: any){
      item.count += 1;
  }

  decrease(item: any){
      if (item.count == 0) return;
      item.count -= 1;
  }

  gotoProductDetail(item: any){
      this.app.getRootNav().push(ProductDetailsPage, {
          item: item,
          shop: this.navParams.data.shop
      });
  }
}
