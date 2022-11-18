import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { cntDecrement, cntIncrement, cntReset, setSampleTrue } from 'src/app/store/ui-state/ui-state.action';
import { selectCount } from 'src/app/store/ui-state/ui-state.selector';

@Component({
  selector: 'app-ngrx',
  templateUrl: './ngrx.component.html',
  styleUrls: ['./ngrx.component.scss']
})
export class NgrxComponent implements OnInit {  
  count$: Observable<number>;

  constructor(
    private store: Store
  ) {
    this.count$ = store.select(selectCount)
    
  }

  ngOnInit(): void {
    console.log('[ngrx.component.ts] Stt..')
    this.store.dispatch(setSampleTrue())
  }

  increment(): void {
    this.store.dispatch(cntIncrement());
  }

  decrement(): void {
    this.store.dispatch(cntDecrement());
  }

  reset(): void{
    this.store.dispatch(cntReset());
  }

}
