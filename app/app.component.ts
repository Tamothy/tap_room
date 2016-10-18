import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>Finna Take it to the Tap Room<h3>-Trick Daddy</h3></h1>
    <div *ngFor="let currentKeg of kegs">
      <h2>{{currentKeg.beerTitle}}</h2>
      <h3>Keg Size: {{currentKeg.pintCount}} pints</h3>
      <button (click)="kegPintCount(currentKeg)">Edit</button>
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
    new Keg("Modelo", 124),
    new Keg("Rogue: 7 Dry Hop IPA", 124),
    new Keg("Boneyard: Notorious Triple IPA", 124)
  ];

  selectedKeg: Keg = this.kegs[0];
  kegPintCount(clickedBeer: Keg) {
    this.selectedKeg = clickedBeer;
  }
  finishedEditing(){
    this.selectedKeg = null;
  }
}

export class Keg {
  public done: boolean = false;
  constructor(public beerTitle: string, public pintCount: number) {   }
}
