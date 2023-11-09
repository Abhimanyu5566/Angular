import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent {


  inputs1:string = '';
  inputs2:string ='';
  result: number =0;

  addFuncation()
  {
    this.result = parseInt(this.inputs1) + parseInt(this.inputs2);
  }

  subFuncation(){
    this.result = parseInt(this.inputs1) - parseInt(this.inputs2);
  }
  mulFuncation(){
    this.result = parseInt(this.inputs1) * parseInt(this.inputs2);
  }
  divFuncation(){
    this.result = parseInt(this.inputs1) / parseInt(this.inputs2);
  }


}
