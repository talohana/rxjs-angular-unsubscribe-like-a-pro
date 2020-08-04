import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DummyService } from './services/dummy.service';

@Component({
  selector: 'app-async',
  template: `<div>{{ emissions$ | async }}</div>`,
  styles: [],
})
export class AsyncComponent implements OnInit {
  emissions$: Observable<string>;

  constructor(private dummyService: DummyService) {}

  ngOnInit(): void {
    this.emissions$ = this.dummyService.getEmissions('[Async]');
  }
}
