import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
// pipe para filtar las peliculas.  el cual hace una busqueda mediante
// un .filter y devuelve un array nuevo
const testing = value.filter( movies => movies.display_title.toLowerCase().indexOf(arg.toLowerCase()) > -1);

    return testing;
  }

}
