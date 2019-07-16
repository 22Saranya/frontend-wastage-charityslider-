import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SliderService } from '../slider.service';
import { Charity } from '../charity';

@Component({
 selector: 'app-charity-slider',
 templateUrl: './charity-slider.component.html',
 styleUrls: ['./charity-slider.component.css']
})
export class CharitySliderComponent implements OnInit {
 displayCharitySlider: any;
 allCharities: any;
 http: any;

 allCharity:any =[];
//  public charity1;
//  public charity2;
//  public charity3;
//  public charity4;
//  public charity5;
//  public charity6;
//  public charity7;
//  public charity8;
  public restImgPath: string;

 constructor(private service:SliderService) { }
ngOnInit() {
   // console.log(this.getAllCharities);
   this.service.getAllCharities().subscribe((data: any) => {
    //  console.log(data);
     console.log("I am here....")

     this.allCharity = data;
     console.log(this.allCharity);
     
     this.allCharities = data;

    //  let charity2,charity3,charity4;
    //  this.charity1=data[0];
    //  this.charity2=data[1];
    //  this.charity3=data[2];
    //  this.charity4=data[3];
    //  this.charity5=data[4];
    //  this.charity6=data[5];
    //  this.charity7=data[6];
    //  this.charity8=data[7];

    //  console.log(this.charity1.img_url);
    //  console.log(this.charity2.img_url);
    //  console.log(this.charity3.img_url);
    //  console.log(this.charity4.img_url);
    //  console.log(this.charity5.img_url);
    //  console.log(this.charity6.img_url);
    //  console.log(this.charity7.img_url);
    //  console.log(this.charity8.img_url);

    //  console.log(charity2=data[1]);
    //  console.log(charity3=data[2]);
    //  console.log(charity4=data[3]);
    //  let i=0;
    //  for(let charities:this.allCharities)
    //  {
    //  console.log(this.allCharities[i]);
    //  }
  });

 }

//   openView(charity)
//  {
//    document.getElementById("charity_name").innerHTML=charity.charity_name;

//  }
closeView() {
  document.getElementById("viewCharity").style.display = "none";
}
 charityDetails(item)
 {
  document.getElementById("viewCharity").style.display="block";
  this.restImgPath = item.thumb;
    // this.restMenu_url = item.menu_url;
    // console.log(this.charity1.charity_name);
   // document.getElementById("viewCharity").style.display = "block";
   document.getElementById("CharityName").innerHTML = item.charity_name;
   document.getElementById("CharityAddress").innerHTML = item.address;
   document.getElementById("PhoneNumber").innerHTML = item.phonenumber;
}

}