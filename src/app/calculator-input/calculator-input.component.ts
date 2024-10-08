import { Component, Output, EventEmitter, signal, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalculatorInput } from './calculator-input.model';
import { AppService } from '../app.service';

@Component({
  selector: 'app-calculator-input',
  standalone: false,
  // imports: [FormsModule],
  templateUrl: './calculator-input.component.html',
  styleUrl: './calculator-input.component.css',
})
export class CalculatorInputComponent {
  // @Output() calculatorInput = new EventEmitter<CalculatorInput>();
  // calculatorInput = output<CalculatorInput>()

  // annualInvestmentInput = "0";
  // durationInput = "0";
  // expectedReturnInput = "0";
  // initialInvestmentInput = "0";

  constructor(private appService: AppService) {}
  annualInvestmentInput = signal('0');
  durationInput = signal('0');
  expectedReturnInput = signal('0');
  initialInvestmentInput = signal('0');

  onSubmit() {
    this.appService.calculateInvestmentResults({
      annualInvestment: +this.annualInvestmentInput(),
      initialInvestment: +this.initialInvestmentInput(),
      expectedReturn: +this.expectedReturnInput(),
      duration: +this.durationInput(),
    });
    // this.calculatorInput.emit({
    //   annualInvestment: +this.annualInvestmentInput(),
    //   initialInvestment: +this.initialInvestmentInput(),
    //   expectedReturn: +this.expectedReturnInput(),
    //   duration: +this.durationInput()
    // })
    this.annualInvestmentInput.set('0');
    this.durationInput.set('0');
    this.expectedReturnInput.set('0');
    this.initialInvestmentInput.set('0');
  }
}
