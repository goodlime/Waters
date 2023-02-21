import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs';
import { Product, ShopService } from '../shop.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  products: Product[] = [];
  activePage: number = 1;
  activeItem: Product | undefined;

  constructor(
    private shopService: ShopService,
    private activateRoute: ActivatedRoute
  ) {
    activateRoute.params.subscribe(params => {
      this.activePage = +params['page']
      this.shopService.getProducts()
        .pipe(
          map(products => products.filter(product => {
            return product.page === this.activePage
          }))
        )
        .subscribe((products) => {
          this.products = products;
        });
    })
  }

  ngOnInit(): void { }

  toggleItem(item: Product) {
    this.activeItem = (item !== this.activeItem) ? item : undefined;
  }

}
