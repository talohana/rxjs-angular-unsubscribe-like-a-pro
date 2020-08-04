import { Component, OnDestroy, OnInit } from '@angular/core';
import { SubSink } from 'subsink';
import { DummyService } from './services/dummy.service';

@Component({
  selector: 'app-sink',
  template: `
    <div>{{ easyEmission }}</div>
    <div>{{ arrayAddEmission }}</div>
  `,
})
export class SinkComponent implements OnInit, OnDestroy {
  easyEmission: string;
  arrayAddEmission: string;

  private subs = new SubSink();

  constructor(private dummyService: DummyService) {}

  ngOnInit(): void {
    /* Using the Easy Technique with a setter function */
    this.subs.sink = this.dummyService
      .getEmissions('[Easy Technique]')
      .subscribe((emission) => (this.easyEmission = emission));

    /* Using the Array/Add Technique */
    this.subs.add(
      this.dummyService
        .getEmissions('[Array/Add Technique]')
        .subscribe((emission) => (this.easyEmission = emission))
    );
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
