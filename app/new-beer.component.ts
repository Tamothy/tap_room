import { Component , Output, EventEmitter } from '@angular/core';
import { Keg } from './keg.component';


export class NewBeer {
  addClicked(beerTitle: string, pintCount: number) {
      var newBeer: Keg = new Keg(beerTitle, pintCount);
    }
}
