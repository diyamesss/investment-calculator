// Use the below code as a help
// e.g., integrate it into a service or component
// You may need to tweak it, depending on where and how you use it
import { CalculatorInput } from "./app/calculator-input/calculator-input.model"

export function calculateInvestmentResults(calculatorInput: CalculatorInput) {
  const annualData = [];
  let investmentValue = calculatorInput.initialInvestment;

  for (let i = 0; i < calculatorInput.duration; i++) {
    const year = i + 1;
    const interestEarnedInYear = investmentValue * (calculatorInput.expectedReturn / 100);
    investmentValue += interestEarnedInYear + calculatorInput.annualInvestment;
    const totalInterest =
      investmentValue - calculatorInput.annualInvestment * year - calculatorInput.initialInvestment;
    annualData.push({
      year: year,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      annualInvestment: calculatorInput.annualInvestment,
      totalInterest: totalInterest,
      totalAmountInvested: calculatorInput.initialInvestment + calculatorInput.annualInvestment * year,
    });
  }

  return annualData;
}
