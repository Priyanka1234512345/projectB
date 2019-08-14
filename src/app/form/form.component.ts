import { Component, OnInit } from '@angular/core';
import { ApiservicsService } from '../apiservics.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
val=true;
edit=true;
name:any;
gender:any;
email:any;
phone:any;
index1:any;
local1:any;
delet:any;
  constructor(private nam:ApiservicsService) { }
  local:any;
  public newArray=new Array();
  myFunc(a:any,b:any,c:any,d:any,e:any,f:any){
  var newobj={name:a,gender:c,phone:d,email:e};
  this.newArray.push(newobj);

  }
 postdetails(name,gender,email,phone){
 this.nam.postdetails(name,gender,email,phone).subscribe(res=>{
 console.log('res',res);
 })
 }
  hello(){
  this.nam.hello().subscribe(res=>{this.local=res;console.log('res',res)});
  }
  ngOnInit() {
  this.hello();
  }

  // updateName(name,gender,email,phone) {

  // this.nam.updateName(name,gender,email,phone).subscribe(res=>{
  // console.log('res',res);
  // })
  //edit function
  updateName(name,gender,email,phone,i){
    this.val=false;
    this.index1 = i ;
this.name = name;
this.gender = gender;
this.email = email;
this.phone = phone;
this.edit = false;
  }


//update func
   updat(name,gender,email,phone,i){
// this.name = name;
// this.gender = gender;
// this.email = email;
// this.phone = phone;
this.nam.updateName(name,gender,email,phone,i).subscribe(res=>{this.local1=res;console.log('res',res)});

  }
delete(i){
  this.nam.delete(i).subscribe(res=>{this.delet=res;console.log('res',res)});
}


// this.local
}


