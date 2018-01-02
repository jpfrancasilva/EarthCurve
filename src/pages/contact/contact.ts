import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }


  medida: string;

  //D=Vh²+2hR

  public calc(hight:any, medida:any){

  		if(medida == "m"){
  			if(hight >= 0){
  				let result:number = Math.sqrt(Math.pow(hight*0.001,2) + (2*(hight*0.001)*6371))
  				let arredonda = result.toFixed(5);

  				return arredonda + " km";
  			}
  			else{
  				return "Enter a valid number";
  			}
  		}
  		else if(medida == "f"){
  			if(hight >= 0){
  				//let transf:number = hight * 0.3076128

  				let result:number = Math.sqrt(Math.pow(hight*0.000189394,2) + (2*(hight*0.000189394)*3958.756))
  				//let resultInMiles = result * 0.621371
  				let arredonda = result.toFixed(5);

  				return arredonda + " Miles";
  			}
  			else{
  				return "Enter a valid number";
  			}
  		}else{
  			return "choose a metric";
  		}
  }

}
