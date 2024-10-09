import { Injectable, signal } from '@angular/core';
import { CalculatorInput } from './calculator-input/calculator-input.model';

@Injectable({ providedIn: 'root' })
export class AppService {
  resultData = signal<{
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested: number;
  }[] | undefined>(undefined);

  calculateInvestmentResults(calculatorInput: CalculatorInput) {
    const annualData = [];
    let investmentValue = calculatorInput.initialInvestment;

    for (let i = 0; i < calculatorInput.duration; i++) {
      const year = i + 1;
      const interestEarnedInYear =
        investmentValue * (calculatorInput.expectedReturn / 100);
      investmentValue +=
        interestEarnedInYear + calculatorInput.annualInvestment;
      const totalInterest =
        investmentValue -
        calculatorInput.annualInvestment * year -
        calculatorInput.initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: calculatorInput.annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested:
          calculatorInput.initialInvestment +
          calculatorInput.annualInvestment * year,
      });
    }

    this.resultData?.set(annualData);
  }
}
