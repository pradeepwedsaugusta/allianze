import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchText?: any): any {
    console.log(searchText);
    return searchText != "" ? value.filter((item: any) => item.style_title != null ?searchText.indexOf(item.style_title) !== -1 : false) : value;
  }

}
