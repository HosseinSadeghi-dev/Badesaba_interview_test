import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../core/services/product.service";
import {ProductModel} from "../../core/models/product.model";

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {

  products: ProductModel[] = []

  constructor(
    private productService: ProductService
  ) {
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(res => {
      this.products = res
    })
  }

}
