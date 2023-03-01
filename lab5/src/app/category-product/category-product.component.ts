import {Component, OnInit} from '@angular/core';
import {Product, products} from "../products";
import {ActivatedRoute} from "@angular/router";
import {Category} from "../categories";

@Component({
  selector: 'app-category-product',
  templateUrl: './category-product.component.html',
  styleUrls: ['./category-product.component.css']
})
export class CategoryProductComponent implements OnInit{
  products: Product[] | undefined;
  constructor(private route: ActivatedRoute,) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const catIdFromRoute = Number(routeParams.get('categoryId'));
    this.products = products.filter(p => p.category.id == catIdFromRoute);
  }
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
