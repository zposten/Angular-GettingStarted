import {Injectable} from '@angular/core'
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class ProductDetailGuard implements CanActivate {

  constructor(private router: Router) {}

  public canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | Promise<boolean> | boolean {
    let id = +next.url[1].path
    if (!isNaN(id) && id >= 1) return true

    alert('Invalid product ID')
    this.router.navigate(['/products'])
    return false
  }
}
