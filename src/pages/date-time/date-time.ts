import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Navbar } from 'ionic-angular';

import { Calendar } from '@ionic-native/calendar';
/*
  Generated class for the DateTime page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-date-time',
  templateUrl: 'date-time.html'
})
export class DateTimePage {

  @ViewChild('navBar') navBar : Navbar;

  startDate = new Date();
  constructor(public navCtrl: NavController, public navParams: NavParams, private calendar: Calendar) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad DateTimePage');
  }

  ngOnInit(): void {
    this.navBar.setBackButtonText('');
  }

  openCalendar(){
    this.calendar.openCalendar(this.startDate);
  }

}
