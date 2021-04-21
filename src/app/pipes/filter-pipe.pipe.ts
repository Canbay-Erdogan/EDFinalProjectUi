import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../modals/product';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Product[], filterText: string): Product[] {
    filterText = filterText? filterText.toLocaleLowerCase() : ""
    return filterText?value.filter((p:Product)=>
      p.productName.toLocaleLowerCase().includes(filterText)):value;
  }
}