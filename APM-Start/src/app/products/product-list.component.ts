import {Component, OnInit} from '@angular/core'
import {IProduct} from './product'
import {ProductService} from './products.service'

@Component({
  selector: 'pm-products',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  public areImagesShown = true
  public pageTitle = 'Product List'
  public products: IProduct[]
  public filteredProducts: IProduct[] = []

  private errorMessage: string

  constructor(private productService: ProductService) {}

  private _listFilter = '' // tslint:disable-line
  public get listFilter() {return this._listFilter}
  public set listFilter(filter) {
    this._listFilter = filter
    this.filteredProducts = this.products.filter(product => {
      let vals = Object.values(product)
      return vals.some(v => {
        let s = v.toString()
        return s.toLowerCase().includes(filter.toLowerCase())
      })
    })
  }

  public handleShowImageClick() {
    this.areImagesShown = !this.areImagesShown
  }

  public handleStarClick(rating: string) {
    this.pageTitle = 'Product List: ' + rating
  }

  public ngOnInit() {
    this.productService
      .getProducts()
      .subscribe(
        products => {
          this.products = products
          this.filteredProducts = products
        },
        error => this.errorMessage = error,
      )
  }
}
