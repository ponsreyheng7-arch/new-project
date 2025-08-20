import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tokhr'
})
export class TokhrPipe implements PipeTransform {

  transform(amount: number, rate: number, type: 'out' | 'in' | 'floor' = 'out'): string {
     const newAmount = amount + 10;
    const res = amount * rate;

    if (type === 'floor') {
      // Round down to nearest 100
      const rounded = Math.floor(res / 100) * 100;
      return rounded.toLocaleString() + ' ៛';
    } else if (type === 'in') {
      // Round to nearest 100 normally
      const rounded = Math.round(res / 100) * 100;
      return rounded.toLocaleString() + ' ៛';
    }

    // Default: no rounding, full amount
    return res.toLocaleString() + ' ៛';
  }

}
