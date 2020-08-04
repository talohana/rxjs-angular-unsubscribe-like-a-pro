import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DummyService } from './services/dummy.service';

@Component({
  selector: 'app-add',
  template: `
    <div>{{ emissionA }}</div>
    <div>{{ emissionB }}</div>
  `,
})
export class AddComponent implements OnInit, OnDestroy {
  emissionA: string;
  emissionB: string;

  private subscription: Subscription = new Subscription();

  constructor(private dummyService: DummyService) {}

  ngOnInit(): void {
    this.subscription.add(
      this.dummyService
        .getEmissions('[Add A]')
        .subscribe((emission) => (this.emissionA = emission))
    );

    this.subscription.add(
      this.dummyService
        .getEmissions('[Add B]')
        .subscribe((emission) => (this.emissionB = emission))
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
