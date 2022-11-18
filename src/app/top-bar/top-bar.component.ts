import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UiState } from '../entity/UiState';
import { setSampleBtn } from '../store/ui-state/ui-state.action';
import { selectIsSample, selectUiState } from '../store/ui-state/ui-state.selector';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {  
  isSample$ : Observable<boolean> ;
  title:string = 'My Store'
  
  constructor(
    private store: Store
    ) {
      this.isSample$ = store.select(selectIsSample);      
  }

  setUiState(uiState:UiState){
    this.store.dispatch(setSampleBtn(uiState))
  }

  goToSample() {    
    const uiState: UiState = {
      count: 0,
      isSample: true
    }
    this.setUiState(uiState);
  }

  goToMyStore() {
    const uiState: UiState = {
      count: 0,
      isSample: false
    }    
    this.setUiState(uiState);
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/