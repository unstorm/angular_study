import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { cntDecrement, cntIncrement, cntReset, setSampleTrue } from 'src/app/store/ui-state/ui-state.action';
import { selectCount } from 'src/app/store/ui-state/ui-state.selector';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';

@Component({
  selector: 'app-ngrx',
  templateUrl: './ngrx.component.html',
  styleUrls: ['./ngrx.component.scss']
})
export class NgrxComponent implements OnInit {  
  count$: Observable<number>;
  private socket$: WebSocketSubject<any>;

  constructor(
    private store: Store
  ) {
    this.count$ = store.select(selectCount)
    

    this.socket$ = webSocket('ws://localhost:8080/chat'); // Replace with your WebSocket server URL
    this.socket$.subscribe(
      (message) => {
        console.log('Received message:', message);
        // Handle the received message as needed
      },
      (error) => {
        console.error('WebSocket error:', error);
        // Handle WebSocket connection errors
      }
    );
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
