import { Component, computed, input, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { AppService } from '../app.service';

@Component({
  selector: 'app-investmment-result',
  standalone: false,
  // imports: [CurrencyPipe],
  templateUrl: './investmment-result.component.html',
  styleUrl: './investmment-result.component.css',
})
export class InvestmmentResultComponent {
  
  constructor(private appService: AppService){}
  // @Input({ required: true }) calculated?: {
  //   year: number;
  //   interest: number;
  //   valueEndOfYear: number;
  //   annualInvestment: number;
  //   totalInterest: number;
  //   totalAmountInvested: number;
  // }[];
  
  // calculated = input<
  //   {
  //     year: number;
  //     interest: number;
  //     valueEndOfYear: number;
  //     annualInvestment: number;
  //     totalInterest: number;
  //     totalAmountInvested: number;
  //   }[]
  // >();

  calculated = computed(() => this.appService.resultData());
}
