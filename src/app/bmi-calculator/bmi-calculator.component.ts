import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bmi-calculator',
  templateUrl: './bmi-calculator.component.html',
  styleUrls: ['./bmi-calculator.component.css']
})
export class BmiCalculatorComponent implements OnInit {

    stone: number;
    pounds: number;
    kilograms: number;
    feet: number;
    inches: number;
    metres: number;
    weight: number;
    height: number;
    bmi: number;

    constructor(private location: Location) { }

    goBack() {
        this.location.back();
    }

    BMIConversion() {
        this.kilograms = ((this.stone * 14) + this.pounds) * 0.4536;
        this.metres = ((this.feet * 12) + this.inches) * 0.0254;
        this.inches = ((this.metres * 3.28084) * 12) % 12;
        this.feet = (this.metres * 3.28084) - (this.inches / 12);
        this.stone = this.kilograms * 0.157473;
        this.pounds = (this.stone * 14) % 14;
        this.stone = this.stone - (this.pounds / 14);
    }

  ngOnInit() {
  }

}
