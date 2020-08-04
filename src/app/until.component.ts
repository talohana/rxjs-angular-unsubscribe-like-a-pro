import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DummyService } from './services/dummy.service';

@Component({
  selector: 'app-until',
  template: `<div>{{ emission }}</div>`,
})
export class UntilComponent implements OnInit, OnDestroy {
  emission: string;

  private componentDestroyed$: Subject<void> = new Subject<void>();

  constructor(private dummyService: DummyService) {}

  ngOnInit(): void {
    this.dummyService
      .getEmissions('takeUntil')
      .pipe(takeUntil(this.componentDestroyed$))
      .subscribe((emission) => (this.emission = emission));
  }

  ngOnDestroy(): void {
    this.componentDestroyed$.next();
  }
}
