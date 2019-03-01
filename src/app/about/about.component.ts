import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  title: string = '🤘🤩🤘 Concert Daze 🤘🤩🤘';

  constructor(
    private location: Location
  ) { }

  ngOnInit() {
  }

  public goBack() {
    this.location.back();
  }

}
