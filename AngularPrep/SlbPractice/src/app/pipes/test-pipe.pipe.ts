import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'testPipe'
})
export class TestPipePipe implements PipeTransform {

  transform(value: any, userInput: string): string {
    if(userInput != null){
      if (userInput.length >= 3){
    return 'this was transformed with custom pipe';
      }
    }
    else return ''
  }

}
