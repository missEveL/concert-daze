import { Venue } from './venue';
import { Act } from './act';

export class ConcertSpect {
id: number;
title: string;
date: string;
venue: Venue;
lineUp: Act[];
images: string[];

constructor (){}

}
