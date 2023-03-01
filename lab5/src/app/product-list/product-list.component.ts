import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = [...products];

  share(prodLink: string | URL | undefined) {
    // window.alert('The product has been shared!');
    window.open(
      'https://wa.me/77079602081?text=Хочу приобрести товар по ссылке ' +
        prodLink,
      'menubar=off,toolbar=off'
    );
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
