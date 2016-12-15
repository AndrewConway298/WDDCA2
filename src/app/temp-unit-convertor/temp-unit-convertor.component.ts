import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-temp-unit-convertor',
    templateUrl: './temp-unit-convertor.component.html',
    styleUrls: ['./temp-unit-convertor.component.css']
})
export class TempUnitConvertorComponent implements OnInit {

    celsius: number;
    fahrenheit: number;
    //totalConversions: number = 0;

    constructor(private router: Router) { }

    navigate() {
        this.router.navigate(["bmi-calculator"]);
    }

    CelsiusToFarhenheit() {
        this.fahrenheit = this.celsius * 1.8 + 32;
    }

    FarhenheitToCelsius() {
        this.celsius = this.fahrenheit - 32 * 0.5556;
    }

    /*OnConvert() {
        this.totalConversions++;
    }*/

    ngOnInit() {
    }

}
