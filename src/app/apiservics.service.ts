import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiservicsService {

  constructor(private _http:HttpClient) { }
//post API
  postdetails(name,gender,phone,email){
  var obj ={"name":name,"gender":gender,"phone":phone,"email":email};
  console.log(obj);
  return this._http.post('http://localhost:8089/api/user',obj,{})
  }

  //UPDATE API//
  updateName(name,gender,phone,email,_id){
  var obj = {"name":name,"gender":gender,"phone":phone,"email":email,"_id":_id};
  console.log(obj);
   return this._http.post('http://localhost:8089/api/userupdate',obj,{})
  }
  

 /*get Api*/
 hello(){
  
  return this._http.get('http://localhost:8089/api/user')
  }
 
  delete(id){
  
  return this._http.delete('http://localhost:8089/api/user/'+id)
  }
}
