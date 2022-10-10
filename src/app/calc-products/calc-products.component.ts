import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-calc-products',
  templateUrl: './calc-products.component.html',
  styleUrls: ['./calc-products.component.css']
})
export class CalcProductsComponent implements OnInit {
  userID: any;
  @Input() price: any;
  productsAdded: number = 0;
  priceAmount: number = 0;

  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe(params => this.userID = params.get("id"));
  }

  ngOnInit(): void {
    
  }


  addProduct(amount: number) {
    
    this.priceAmount += amount;
    this.productsAdded++;
  }

  subProduct(amount: number) {
    this.priceAmount -= amount;
    this.productsAdded--;
    if (this.productsAdded <= 0) {
      this.cancel();
    }
  }

  cancel() {
    this.priceAmount = 0;
    this.productsAdded = 0;
  }

}
