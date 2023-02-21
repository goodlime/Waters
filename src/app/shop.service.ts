import { Injectable } from '@angular/core';
import { of } from 'rxjs';

export interface Product {
  title: string,
  price: number,
  description: string,
  bgColor: string,
  page: number
}

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  products: Product[] = [
    {
      title: 'Starter',
      price: 1,
      description: 'Starter features for your business to grow.',
      bgColor: '#979797',
      page: 1
    },
    {
      title: 'Regular',
      price: 25,
      description: 'Regular features for your business to grow.',
      bgColor: '#3B86FF',
      page: 1
    },
    {
      title: 'Professional',
      price: 75,
      description: 'Professional features for your business to grow.',
      bgColor: '#8B68EE',
      page: 2
    },
    {
      title: 'Ultimate',
      price: 115,
      description: 'The ultimate set of features for your business to grow.',
      bgColor: '#EE3541',
      page: 2
    }
  ];

  constructor() { }

  getProducts() {
    return of(this.products);
  }
}
