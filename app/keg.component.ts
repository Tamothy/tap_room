import { Component } from '@angular/core';

export class Keg {
  public done: boolean = false;
  constructor(public beerTitle: string, public pintCount: number, public alcohol: number) {   }
}
