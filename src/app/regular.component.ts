import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DummyService } from './services/dummy.service';

@Component({
  selector: 'app-regular',
  template: `<div>{{ emission }}</div>`,
})
export class RegularComponent implements OnInit, OnDestroy {
  emission: string;

  /* 
    Note: we initialize to Subscription.EMPTY to avoid null checking within ngOnDestroy
   */
  private subsription: Subscription = Subscription.EMPTY;

  constructor(private dummyService: DummyService) {}

  ngOnInit(): void {
    this.subsription = this.dummyService
      .getEmissions('[Regular]')
      .subscribe((emission) => (this.emission = emission));
  }

  ngOnDestroy(): void {
    this.subsription.unsubscribe();
  }
}
