import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
    ) { }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('상품이 카트에 등록되었습니다!')
  }

  ngOnInit(): void {
    //최근의 라우트에서 product id 를 얻는다.
    const routeParams = this.route.snapshot.paramMap;
    const proudctIdFromRoute = Number(routeParams.get('productId'));

    //product id를 매칭시켜 route에 접근
    this.product = products.find(product => product.id === proudctIdFromRoute)
  }

}
