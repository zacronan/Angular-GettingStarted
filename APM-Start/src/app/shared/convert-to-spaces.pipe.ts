import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
name: 'convertToSpaces'
})
export class ConvertToSpacesPipe implements PipeTransform {
  transform(value: string, exponent: string): string {
    return value.replace(exponent, ' ');
  }

}
