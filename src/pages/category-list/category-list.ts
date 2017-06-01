import {Component, OnInit, ViewChild} from '@angular/core';
import {Navbar, NavController, NavParams} from 'ionic-angular';
import {ProductListByCategoryPage} from "../product-list-by-category/product-list-by-category-page";

/*
  Generated class for the CategoryList page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-category-list',
  templateUrl: 'category-list.html'
})
export class CategoryListPage implements OnInit {
  items = [{
    category: 'beverages',
    header: 'Beverages',
    subtext: 'coffee/tea, juice, soda' },
  {
    category: 'bread-basket',
    header: 'Bread / Bakery',
    subtext: 'sandwich loaves, dinner rolls, tortillas, bagels' },
  {
    category: 'can',
    header: 'Canned / Jarred Goods',
    subtext: 'vegatables, spaggeti sauce, ketchup' },
  {
    category: 'cow-milk',
    header: 'Dairy',
    subtext: 'cheeses, eggs, milk, yougurt, butter' },
  // {
  //   category: 'pasta',
  //   header: 'Dry/Baking Goods',
  //   subtext: 'cereals, flours, sugar, pasta, mixes' },
  // {
  //   category: 'ice-cream-cornet',
  //   header: 'Frozen Foods',
  //   subtext: 'waffles, vegatables, individual meals, ice cream' },
  // {
  //   category: 'supermarket',
  //   header: 'Meat',
  //   subtext: 'lunch meat, poultry, beef, pork' },
  // {
  //   category: 'broccoli',
  //   header: 'Produce',
  //   subtext: 'fruits, vegatables' },
  // {
  //   category: 'window-cleaner',
  //   header: 'Cleaners',
  //   subtext: 'all-purpose, loundry detergent, dishwashing liquid/detergent' },
  // {
  //   category: 'paper-towel',
  //   header: 'Paper Goods',
  //   subtext: 'paper towels, toilet paper, alumnium oil, sandwich bags' },
  // {
  //   category: 'toiletries',
  //   header: 'Personal Care',
  //   subtext: 'shampoo, soap, hand soap, shaving cream' },
  // {
  //   category: 'package',
  //   header: 'Other',
  //   subtext: 'baby items, pet items, batteries, greeting card' },
  ];
  @ViewChild('navBar') navBar : Navbar;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ngOnInit(): void {
    this.navBar.setBackButtonText('');
  }

  selectCategory(item: any) {
    this.navCtrl.push(ProductListByCategoryPage, {
      category: item,
      shop: this.navParams.data,
      categories: this.items
    });
  }

}
