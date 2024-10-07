import { Component, input, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-investmment-result',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investmment-result.component.html',
  styleUrl: './investmment-result.component.css',
})
export class InvestmmentResultComponent {
  // @Input({ required: true }) calculated?: {
  //   year: number;
  //   interest: number;
  //   valueEndOfYear: number;
  //   annualInvestment: number;
  //   totalInterest: number;
  //   totalAmountInvested: number;
  // }[];
  
  calculated = input<
    {
      year: number;
      interest: number;
      valueEndOfYear: number;
      annualInvestment: number;
      totalInterest: number;
      totalAmountInvested: number;
    }[]
  >();
}
