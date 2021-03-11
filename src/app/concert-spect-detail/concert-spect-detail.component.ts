import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ConcertSpect } from '../models/concert-spect'

@Component({
  selector: 'app-concert-spect-detail',
  templateUrl: './concert-spect-detail.component.html',
  styleUrls: ['./concert-spect-detail.component.css']
})
export class ConcertSpectDetailComponent implements OnInit {

  @Input() concertSpect: ConcertSpect;
  @Input() concertSpectImages: string[];
  @Input() backgroundColor: string;
  @Input() showSlides: boolean;
  @Output() showSlidesChange = new EventEmitter();

  cols: number = 4;
  ind: number = 0;

  constructor() { }

  ngOnInit() {
  }

  public openSlide(index:number) {
    this.showSlides = true;
    this.ind = index;
    this.showSlidesChange.emit(this.showSlides);
  }

}
