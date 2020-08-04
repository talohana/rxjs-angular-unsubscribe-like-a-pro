import { Component } from '@angular/core';
import { AddComponent } from './add.component';
import { AsyncComponent } from './async.component';
import { DestroyedComponent } from './destroyed.component';
import { RegularComponent } from './regular.component';
import { SinkComponent } from './sink.component';
import { UntilComponent } from './until.component';

@Component({
  selector: 'app-root',
  template: `<div class="container">
    <div class="intro">
      <img src="https://www.dropbox.com/s/4eyegqfu11pgloi/blog-background.jpg?dl=1" />
      <p>
        Open your console and switch between components
      </p>
      <p>
        Created by
        <a href="https://github.com/talohana" target="blank">tal ohana</a> for
        <a
          href="https://medium.com/@tal.ohana.x/rxjs-angular-unsubscribe-like-a-pro-ffeedec60aa7"
          target="blank"
          >this blogpost</a
        >
      </p>
    </div>
    <div class="buttons">
      <button mat-raised-button color="primary" (click)="onChangeComponent(RegularComponent)">
        Regular
      </button>
      <button mat-raised-button color="primary" (click)="onChangeComponent(AddComponent)">
        Subscription.add
      </button>
      <button mat-raised-button color="primary" (click)="onChangeComponent(AsyncComponent)">
        AsyncPipe
      </button>
      <button mat-raised-button color="primary" (click)="onChangeComponent(UntilComponent)">
        takeUntil
      </button>
      <button mat-raised-button color="primary" (click)="onChangeComponent(SinkComponent)">
        SubSink
      </button>
      <button mat-raised-button color="primary" (click)="onChangeComponent(DestoyedComponent)">
        UntilDestroy
      </button>
    </div>
    <div class="component">
      <ng-container *ngComponentOutlet="shownComponent"></ng-container>
    </div>
  </div>`,
  styles: [
    `
      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: #fff;
      }

      .intro {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 2rem;
        font-size: 2rem;
      }

      .intro img {
        width: 50rem;
        height: auto;
      }

      .intro a {
        text-transform: uppercase;
        text-decoration: none;
        color: #da1189;
        font-size: 1.1em;
      }

      .buttons {
        display: flex;
        flex-wrap: wrap;
      }

      .buttons button:not(:last-child) {
        margin-right: 1rem;
        font-size: 1.5rem;
      }

      .component {
        margin-top: 3rem;
        font-size: 3.5rem;
        line-height: 5rem;
        min-height: 10rem;
      }
    `,
  ],
})
export class AppComponent {
  shownComponent = RegularComponent;
  RegularComponent = RegularComponent;
  AddComponent = AddComponent;
  AsyncComponent = AsyncComponent;
  UntilComponent = UntilComponent;
  SinkComponent = SinkComponent;
  DestoyedComponent = DestroyedComponent;

  onChangeComponent(component) {
    this.shownComponent = component;
  }
}
