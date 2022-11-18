import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/service/data.service';
import { setSampleTrue } from 'src/app/store/ui-state/ui-state.action';

@Component({
  selector: 'app-loop',
  templateUrl: './loop.component.html',
  styleUrls: ['./loop.component.scss']
})
export class LoopComponent implements OnInit {

  constructor(
    private store: Store,
    private dataservice: DataService
  ) { }

  data!: Observable<{type:string, price:number}[]>;
  externalData!: Observable<any>;

  ngOnInit(): void {
    this.store.dispatch(setSampleTrue())
    this.data = this.dataservice.getData();

    this.dataservice.getExternalData().subscribe(
      response => {
        console.log(response)
        this.externalData = response.resultValue
      }
    )
  }
}
