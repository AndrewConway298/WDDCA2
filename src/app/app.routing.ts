import { HomeComponent } from './home/home.component';
import { TempUnitConvertorComponent } from './temp-unit-convertor/temp-unit-convertor.component';
import { BmiCalculatorComponent } from './bmi-calculator/bmi-calculator.component';

export const AppRoutes: any = [
    { path: "page1", component: HomeComponent },
    { path: "page2", component: TempUnitConvertorComponent },
    { path: "page3", component: BmiCalculatorComponent }
];

export const AppComponents: any = [
    HomeComponent,
    TempUnitConvertorComponent,
    BmiCalculatorComponent
];
