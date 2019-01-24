import {BrowserModule} from '@angular/platform-browser'
import {NgModule} from '@angular/core'
import {FormsModule} from '@angular/forms'

import {AppComponent} from './app.component'
import {ProductListComponent} from './products/product-list.component'
import {ConvertCharToSpacePipe} from './util/convertCharToSpacePipe'

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertCharToSpacePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
