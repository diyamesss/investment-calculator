import { Component, signal } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CalculatorInputComponent } from './calculator-input/calculator-input.component';
import { CalculatorInput } from './calculator-input/calculator-input.model';
import { AppService } from './app.service';
import { InvestmmentResultComponent } from './investmment-result/investmment-result.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, CalculatorInputComponent, InvestmmentResultComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  private calculator = new AppService();
  // resultData?: {
  //   year: number;
  //   interest: number;
  //   valueEndOfYear: number;
  //   annualInvestment: number;
  //   totalInterest: number;
  //   totalAmountInvested: number;
  // }[];
  resultData = signal<
    | {
        year: number;
        interest: number;
        valueEndOfYear: number;
        annualInvestment: number;
        totalInterest: number;
        totalAmountInvested: number;
      }[]
    | undefined
  >(undefined);

  onCalculate(calculatorInput: CalculatorInput) {
    this.resultData.set(
      this.calculator.calculateInvestmentResults(calculatorInput)
    );
  }
}
