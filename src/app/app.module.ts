import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { StoreModule } from '@ngrx/store';
import { uiStateReducer } from './store/ui-state/ui-state.reducer';
import { TextboxComponent } from './sample/textbox/textbox.component';
import { NgrxComponent } from './sample/ngrx/ngrx.component';
import { LoopComponent } from './sample/loop/loop.component';
import { HttpInterceptorService } from './service/http.interceptor.service';
import { ChartComponent } from './sample/chart/chart.component';
import { booksReducer } from './store/state/books.reducer';
import { collectionReducer } from './store/state/collection.reducer';



@NgModule({
  declarations: [
    AppComponent,    
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    TextboxComponent,
    NgrxComponent,
    LoopComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShippingComponent },
      { path: 'sample/text', component: TextboxComponent },
      { path: 'sample/ngrx', component: NgrxComponent },
      { path: 'sample/loop', component: LoopComponent },
      { path: 'sample/chart', component: ChartComponent },      
    ]),
    //ngrx 스토어 설정
    StoreModule.forRoot({
      uiState : uiStateReducer,
      books: booksReducer, 
      collection: collectionReducer 
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
