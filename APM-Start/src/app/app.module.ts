import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
import {RouterModule} from '@angular/router'

import {AppComponent} from './app.component'
import {ProductListComponent} from './products/product-list.component'
import {ConvertCharToSpacePipe} from './util/convertCharToSpacePipe'
import {StarComponent} from './shared/star.component'
import {TimesPipe} from './util/timesPipe'
import {ProductDetailComponent} from './products/product-detail.component'
import {WelcomeComponent} from './home/welcome.component'
import { ProductDetailGuard } from './products/product-detail.guard';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    StarComponent,
    ConvertCharToSpacePipe,
    TimesPipe,
    ProductDetailComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'products', component: ProductListComponent},
      {
        path: 'products/:id',
        component: ProductDetailComponent,
        canActivate: [ProductDetailGuard],
      },
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome'},
    ]),
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
