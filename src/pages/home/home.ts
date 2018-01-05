import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  medida: string;

  public calc(distance:any, medida:any){

  		if(medida == "km"){
  			if(distance >= 0){
  				let delta:number = 162358564.00 + (4*(Math.pow(distance,2)));
  				let result:number = ((-12742.00 + Math.sqrt(delta)) / 2) * 1000.00;
  				let arredonda = result.toFixed(5);

  				return arredonda + " meters";
  			}
  			else{
  				return "enter a valid number";
  			}
  		}
  		else if(medida == "mi"){
  			if(distance >= 0){
  				let transf:number = distance * 1.60934

  				let delta:number = 162358564.00 + (4*(Math.pow(transf,2)));
  				let result:number = ((-12742.00 + Math.sqrt(delta)) / 2) * 1000.00;
  				let resultInFeet = result * 3.28084
  				let arredonda = resultInFeet.toFixed(5);

  				return arredonda + " feet";
  			}
  			else{
  				return "enter a valid number";
  			}
  		}else{
  			return "choose a metric";
  		}
  }

}
