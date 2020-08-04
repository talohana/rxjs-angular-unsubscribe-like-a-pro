import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { DummyService } from './services/dummy.service';

@UntilDestroy()
@Component({
  selector: 'app-destroyed',
  template: `<div>{{ emission }}</div> `,
})
export class DestroyedComponent implements OnInit {
  emission: string;

  constructor(private dummyService: DummyService) {}

  ngOnInit(): void {
    this.dummyService
      .getEmissions('[UntilDestroy]')
      .pipe(untilDestroyed(this))
      .subscribe((emission) => (this.emission = emission));
  }
}
