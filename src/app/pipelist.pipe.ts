import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipelist'
})
export class PipelistPipe implements PipeTransform {

  transform(contentList: any, filterValue?: any) {
    return contentList.filter(function(a:any){
       return a.Genre === filterValue
    })
  }

  

}
