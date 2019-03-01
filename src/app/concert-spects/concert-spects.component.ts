import { Component, OnInit } from '@angular/core';

import { ConcertSpect } from '../models/concert-spect'
import { ConcertSpectService } from '../services/concert-spect.service'

export interface ConcertSpectDisplay {
  concertSpect: ConcertSpect;
  backgroundColor: string;
  headerImage: string | null;
  colSpan: number;
}
@Component({
  selector: 'app-concert-spects',
  templateUrl: './concert-spects.component.html',
  styleUrls: ['./concert-spects.component.css']
})
export class ConcertSpectsComponent implements OnInit {

  maintitle: string = '🤘🤩🤘 Concert Daze 🤘🤩🤘';
  title: string = '';
  gridCols: number = 1;
  concertSpects: ConcertSpectDisplay[] = [];
  concertSpect: ConcertSpect;
  concertSpectImages: string[] = [];
  randNum: number = 0;
  backgroundColor: string ='';
  showSlides: boolean = false;
  viewTitle: string = "Slide"

  constructor(private concertSpectService: ConcertSpectService){}

  ngOnInit(){
    this.title = this.maintitle;
    this.concertSpectService.getJSON()
    .subscribe(cSpects =>
      {
        this.setConcertSpectDisplay(cSpects);
      });
  }

  setConcertSpectDisplay(cSpects: ConcertSpect[]){
    for (let i = 0; i < cSpects.length; i ++) {
      let hasImages = cSpects[i].images.length > 0;
      let concertDisp: ConcertSpectDisplay =
      {
       concertSpect: cSpects[i],
       backgroundColor: this.randomColor(),
       headerImage: hasImages ?
       this.concertSpectService.getImagePath(cSpects[i].id) + '/' + cSpects[i].images[cSpects[i].images.length-1]
       : null,
       colSpan: hasImages ? this.gridCols : 1
     }
     this.concertSpects.push(concertDisp);
    }
  }

  tileClick(cSpectId: number){
    this.concertSpect = this.concertSpects[cSpectId-1].concertSpect;
    this.title =`${this.concertSpect.title} ${this.concertSpect.date}`;
    this.backgroundColor = this.randomColor();
    const numberOfImages = this.concertSpect.images.length - 1;
    const imagePath = this.concertSpectService.getImagePath(cSpectId);
    for (let i=0; i<= numberOfImages; i++) {
        this.concertSpectImages.push(imagePath + '/' + this.concertSpect.images[i]);
    }
  }

  public toggleSlides () {
    return this.showSlides = !this.showSlides;
  }

  public goBack(){
    this.title = this.maintitle;
    this.concertSpectImages = [];
    this.concertSpect = null;
  }

  public randomColor(){
    const colors = ['lightblue','lightgreen','lightpink', '#DDBDF1'];
    let randNum = Math.floor(Math.random() * colors.length) + 1;
    if (randNum === this.randNum){randNum ++;}
    this.randNum = randNum;
    return colors[randNum];
  }
}
