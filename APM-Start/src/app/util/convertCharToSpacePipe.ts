import {Pipe, PipeTransform} from '@angular/core'

@Pipe({name: 'charToSpace'})
export class ConvertCharToSpacePipe implements PipeTransform {
  public transform(value: string, char: string): string {
    if (!value || !char) return null
    return value.replace(char, ' ')
  }
}
