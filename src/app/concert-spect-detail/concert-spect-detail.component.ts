import { Component, OnInit, Input } from '@angular/core';
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

  cols: number = 4;

  constructor() { }

  ngOnInit() {
  }
}
