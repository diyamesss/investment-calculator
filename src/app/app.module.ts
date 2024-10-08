import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { CalculatorInputComponent } from './calculator-input/calculator-input.component';
import { InvestmmentResultComponent } from './investmment-result/investmment-result.component';
import { AppComponent } from './app.component';
import { CurrencyPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CalculatorInputComponent,
    InvestmmentResultComponent,
  ],
  bootstrap: [AppComponent],
  imports: [BrowserModule, FormsModule],
})
export class AppModule {}
