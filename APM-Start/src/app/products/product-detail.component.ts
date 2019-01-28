import {Component, OnInit} from '@angular/core'
import {IProduct} from './product'
import {ActivatedRoute, Router} from '@angular/router'
import {ProductService} from './products.service'

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  public product: IProduct
  public pageTitle = 'Product detail'

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductService,
    private router: Router,
  ) {

  }

  public ngOnInit() {
    let productId = +this.route.snapshot.paramMap.get('id')
    this.productsService
      .getProducts()
      .subscribe(products => {
        this.product = products.find(p => p.id === productId)
      })
  }

  public goBack() {
    this.router.navigate(['products'])
  }

}
