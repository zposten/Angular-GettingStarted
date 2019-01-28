import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {FormsModule} from '@angular/forms'

import {ProductListComponent} from './product-list.component'
import {TimesPipe} from '../util/timesPipe'
import {ConvertCharToSpacePipe} from '../util/convertCharToSpacePipe'
import {ProductDetailComponent} from './product-detail.component'
import {ProductDetailGuard} from './product-detail.guard'
import {StarComponent} from '../shared/star.component'

@NgModule({
  declarations: [
    ProductListComponent,
    TimesPipe,
    ConvertCharToSpacePipe,
    StarComponent,
    ProductDetailComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'products',
        component: ProductListComponent,
      },
      {
        path: 'products/:id',
        component: ProductDetailComponent,
        canActivate: [ProductDetailGuard],
      },
    ]),
  ],
})
export class ProductsModule { }
