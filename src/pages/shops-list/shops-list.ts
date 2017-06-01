import {Component, OnInit, ViewChild} from '@angular/core';
import {Navbar, NavController, NavParams} from 'ionic-angular';
import {CategoryListPage} from "../category-list/category-list";

/*
  Generated class for the ShopsList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-shops-list',
  templateUrl: 'shops-list.html'
})
export class ShopsListPage implements OnInit {
  items = [{
    name: 'Whole Foods',
  }, {name: 'D-Mart'}, {name: 'Wallmart'}, {name: 'SPAR'}];
  @ViewChild('navBar') navBar: Navbar;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ngOnInit(): void {
    this.navBar.setBackButtonText('');
  }

  selectCategory(item: any) {
    this.navCtrl.push(CategoryListPage, item);
  }

}
