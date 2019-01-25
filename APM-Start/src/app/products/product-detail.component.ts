import { Component, OnInit, Input } from '@angular/core';
import { IProduct } from './product';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  @Input() public product: IProduct

  constructor() { }


  public ngOnInit() {
  }

}
