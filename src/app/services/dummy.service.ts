import { Injectable } from '@angular/core';
import { Observable, Subscription, timer } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DummyService {
  getEmissions(scope: string): Observable<string> {
    return Observable.create((observer) => {
      console.log(`${scope} Subscribed`);

      const subscription: Subscription = timer(0, 1000)
        .pipe(
          map((n) => `${scope} Emission #${n}`),
          tap(console.log)
        )
        .subscribe(observer);

      return () => {
        subscription.unsubscribe();
        console.log(`${scope} Unsubscribed`);
      };
    });
  }
}
