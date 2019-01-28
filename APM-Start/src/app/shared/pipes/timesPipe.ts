import {PipeTransform, Pipe} from '@angular/core'

/**
 * A pipe that creates an iterable based on a passed integer
 * Useful for repeating an element n number of times where n
 * is a property of the component, when used in conjunction with
 * *ngFor.  e.g. <div *ngFor='let i in boundNumber|times'></div> will
 * repeat the div boundNumber of times.
 */
@Pipe({name: 'times'})
export class TimesPipe implements PipeTransform {
  public transform(value: number): Iterable<any> {
    const iterable = {} as Iterable<any>

    iterable[Symbol.iterator] = function*() {
      let n = 0
      while (n < value) {
        yield ++n
      }
    }

    return iterable
  }
}
