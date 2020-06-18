import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
//import { increment, decrement, reset } from '../counter.actions';
 

@Component({
  selector: 'app-mycounter',
  templateUrl: './mycounter.component.html',
  styleUrls: ['./mycounter.component.css']
})
export class MycounterComponent  {
  count$: Observable<number>;

  constructor(private store:Store<{count: number}>) {
    this.count$ = store.pipe(select('count'));
   }

/*   increment()
  {
    this.store.dispatch(increment());
  }

  decrement()
  {
    this.store.dispatch(decrement());
  }
  reset() {
    this.store.dispatch(reset());
  } */

}
