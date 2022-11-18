import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { setSampleTrue } from 'src/app/store/ui-state/ui-state.action';

@Component({
  selector: 'app-loop',
  templateUrl: './loop.component.html',
  styleUrls: ['./loop.component.scss']
})
export class LoopComponent implements OnInit {

  constructor(
    private store: Store
  ) { }

  ngOnInit(): void {
    this.store.dispatch(setSampleTrue())
  }

}
