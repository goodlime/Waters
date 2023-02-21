import { Component, EventEmitter, Input, OnInit, Output, SimpleChange } from '@angular/core';
import { Product } from '../shop.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() product!: Product;
  @Input() activeItem: Product | undefined;
  @Output() toggleItemStatus = new EventEmitter<Product>();

  disabled: boolean = false;
  selected: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChange) {
    this.disabled = (this.activeItem && this.product.title !== this.activeItem.title) ? true : false;
    this.selected = (this.activeItem && this.product.title === this.activeItem.title) ? true : false;
  }

  buyProduct(product: Product) {
    this.toggleItemStatus.emit(product);
  }

}
