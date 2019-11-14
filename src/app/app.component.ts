import { Component } from '@angular/core';

import { ConcertSpect } from './models/concert-spect';
import { ConcertSpectService } from './concert-spect.service';

export interface ConcertSpectDisplay {
  concertSpect: ConcertSpect;
  backgroundColor: string;
  headerImage: string | null;
  colSpan: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = '🤘🤩🤘 Concert Daze 🤘🤩🤘';
  gridCols = 1;
  concertSpects: ConcertSpectDisplay[] = [];
  showMain = true;
  concertSpect: ConcertSpect;
  concertSpectImages: string[] = [];

  constructor(private concertSpectService: ConcertSpectService) {}

  OnInit() {
    this.concertSpectService.getJSON()
    .subscribe(cSpects => {
        this.setConcertSpectDisplay(cSpects);
      });
  }

  setConcertSpectDisplay(cSpects: ConcertSpect[]) {
    for (let i = 0; i < cSpects.length; i ++) {
      const hasImages = cSpects[i].images > 0;
      const concertDisp: ConcertSpectDisplay = {
        concertSpect: cSpects[i],
        backgroundColor: this.randomColor(),
        headerImage: (hasImages) ?
        this.concertSpectService.getImagePath(cSpects[i].id) + '/0.jpg' :
        null,
        colSpan: (hasImages) ? this.gridCols : 1
      };

      this.concertSpects.push(concertDisp);
    }
  }

  tileClick(cSpectId: number) {
    this.concertSpect = this.concertSpects[cSpectId - 1].concertSpect;
    const numberOfImages = this.concertSpect.images;
    const imagePath = this.concertSpectService.getImagePath(cSpectId);
    for (let i = 0; i < numberOfImages; i++) {
      this.concertSpectImages.push(imagePath + '/' + i + '.jpg');
    }
    console.log(this.concertSpectImages);
    this.showMain = false;
  }

  goBack() {
    this.showMain = true;
    this.concertSpectImages = [];
  }

  randomColor() {
    const colors = ['lightblue', 'lightgreen', 'lightpink', '#DDBDF1'];
    const randNum = Math.floor(Math.random() * colors.length) + 1;
    return colors[randNum];
  }
}
