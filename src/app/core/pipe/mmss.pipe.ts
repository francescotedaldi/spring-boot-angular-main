import {Pipe, PipeTransform} from '@angular/core';
import {ANY} from '../utils/any';

@Pipe({
  name: 'mmss'
})
export class MmssPipe implements PipeTransform {

  public transform(attesa: number, args?: ANY): string {
    return `${this.settingTimerMode(attesa, '0', 2)}:00`;
  }

  public settingTimerMode(num: number, zero: string, length: number): string {
    return (new Array(length + 1).join(zero) + num).slice(-length);
  }

}
