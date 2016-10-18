import { Component } from '@angular/core';
import { Keg } from './keg.component';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <div class="header">
      <h1>Finna Take it to the Tap Room<h3>-Trick Daddy</h3></h1>
    </div>
    <br>
      <div class=style>
        <div *ngFor="let currentKeg of kegs">
          <h2>{{currentKeg.beerTitle}}</h2>
          <h3>Keg Size: {{currentKeg.pintCount}} pints</h3>
          <h3>Alcohol percentage: {{currentKeg.alcohol}}%</h3>
          <div *ngIf="currentKeg.pintCount <= 40">
            <div class="warning">Warning:</div>
            <div class="low">Low pint count!</div>
          </div>
          <button (click)="kegPintCount(currentKeg)">Edit</button>
          <button (click)="kegSell(currentKeg)">Sell</button>
        </div>
      </div>
      <div *ngIf="selectedKeg">
        <h1>Beer Edit</h1>
        <div>
          <label>Enter Beer:</label>
          <input [(ngModel)]="selectedKeg.beerTitle">
        </div>
        <div>
          <label>Enter number of pints:</label>
          <input [(ngModel)]="selectedKeg.pintCount">
          <button (click)="finishedEditing()">Done</button>
        </div>
      </div>
    </div>
    `
})


export class AppComponent {
  public kegs: Keg[] = [
    new Keg("Modelo", 124, 4.4),
    new Keg("Rogue: 7 Dry Hop IPA", 124, 7.7),
    new Keg("Boneyard: Notorious Triple IPA", 124, 6.4)
  ];

  selectedKeg: Keg = this.kegs[0];
  kegPintCount(clickedBeer: Keg) {
    this.selectedKeg = clickedBeer;
  }

  kegSell(clickedBeer: Keg) {
    clickedBeer.pintCount = clickedBeer.pintCount - 1;
  }

  finishedEditing(){
    this.selectedKeg = null;
  }
}
