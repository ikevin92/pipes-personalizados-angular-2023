import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'sortBy',
})
export class SortByPipe implements PipeTransform {
  transform(heroes: Hero[], sortBy?: keyof Hero | ''): Hero[] {
    console.log({ heroes });

    if (sortBy) {
      return heroes.sort((a, b) => (a[sortBy] > b[sortBy] ? 1 : -1));
    }

    return heroes;
  }
}
