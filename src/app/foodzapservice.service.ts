import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse} from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class FoodzapserviceService {
  
  constructor(private http:HttpClient,private location:Location) { }

  findUser(data:any){
    return this.http.post("http://localhost:8081/findUser",data).pipe(
      catchError(this.handleError)
    )
  }

  postItems(data: any) {
    return this.http.post("http://localhost:8081/postItems",data).pipe(
      catchError(this.handleError)
    )
  }

  deleteItem(data:any){
    return this.http.delete("http://localhost:8081/deleteItem/"+data.id).pipe(
      catchError(this.handleError)
    )
  }

  getItemById(data:any){
    return this.http.get("http://localhost:8081/getItemById/"+data.id).pipe(
      catchError(this.handleError)
    )
  }

  getAllItems(){
    return this.http.get("http://localhost:8081/getAllItems").pipe(
      catchError(this.handleError)
    )
  }

  updateItems(data:any){
    return this.http.post("http://localhost:8081/postItems",
    {
      "id":data.id,
      "imagename": data.imagename,
      "itemname": data.itemname,
      "itemtype": data.itemtype,
      "price": data.price,
      "restaurantlocation": data.restaurantlocation,
      "restaurantname": data.restaurantname,
      "restaurantrating":data.restaurantrating
    }).pipe(
      catchError(this.handleError)
    )
  }

  postOrder(data:any){
    let consumername=sessionStorage.getItem("consumername");
    let address=sessionStorage.getItem("address");
    let city=sessionStorage.getItem("city");
    return this.http.post("http://localhost:8081/postOrders",
    {
      "consumername":consumername,
      "address":address,
      "city":city,
      "items":data
    }).pipe(
      catchError(this.handleError)
    )
  }

  getAllOrders(){
    return this.http.get("http://localhost:8081/getAllOrders").pipe(
      catchError(this.handleError)
    )
  }

  deleteOrder(data:any){
    return this.http.delete("http://localhost:8081/deleteOrder/"+data.id).pipe(
      catchError(this.handleError)
    )
  }

  postConsumer(data:any){
    return this.http.post("http://localhost:8081/postConsumer",
    {
      "firstname": data.firstname,
      "lastname": data.lastname,
      "mobileno": data.mobileno,
      "address1": data.address1,
      "address2": data.address2,
      "city": data.city,
      "pincode": data.pincode,
      "foodzapusers": {
        "name": data.firstname+" "+data.lastname,
        "password": data.password,
        "role": "user"
      }
      }).pipe(
      catchError(this.handleError)
    )
  }

  postUpdateConsumer(data:any){
    return this.http.post("http://localhost:8081/postConsumer",
    {
      "id":data.id,
      "firstname": data.firstname,
      "lastname": data.lastname,
      "mobileno": data.mobileno,
      "address1": data.address1,
      "address2": data.address2,
      "city": data.city,
      "pincode": data.pincode,
      "foodzapusers": {
        "id":data.foodzapusers.id,
        "name": data.firstname+" "+data.lastname,
        "password": data.password,
        "role": "user"
      }
      }).pipe(
      catchError(this.handleError)
    )
  }

  getAllConsumers(){
    return this.http.get("http://localhost:8081/getAllConsumers").pipe(
      catchError(this.handleError)
    )
  }
  
  postUser(data:any){
    return this.http.post("http://localhost:8081/postUser",data).pipe(
      catchError(this.handleError)
    )
  }

  postAdmin(data: any){
    return this.http.post("http://localhost:8081/postAdmin",
    {
     "firstname": data.firstname,
     "lastname": data.lastname,
      "emailid": data.emailid,
      "phoneno": data.phoneno,
      "addressline1": data.addressline1,
      "addressline2": data.addressline2,
      "city": data.city,
      "pincode": data.pincode,
      "foodzapusers": {
        "name": data.firstname+" "+data.lastname,
        "password": data.password,
        "role": "admin"
      }
    }
    ).pipe(
      catchError(this.handleError)
    )
  }

  postUpdateAdmin(data:any){
    return this.http.post("http://localhost:8081/postAdmin",
    {
      "id":data.id,
     "firstname": data.firstname,
     "lastname": data.lastname,
      "emailid": data.emailid,
      "phoneno": data.phoneno,
      "addressline1": data.addressline1,
      "addressline2": data.addressline2,
      "city": data.city,
      "pincode": data.pincode,
      "foodzapusers": {
        "id":data.foodzapusers.id,
        "name": data.firstname+" "+data.lastname,
        "password": data.password,
        "role": "admin"
      }
    }
    ).pipe(
      catchError(this.handleError)
    )
  }

  getAllAdmin(){
    return this.http.get("http://localhost:8081/getAllAdmin").pipe(
      catchError(this.handleError)
    )
  }

  goBack(){
    if(confirm("Are you sure you want to leave?")){
    this.location.back();
    }
  }

  deleteAdminData(data:any){
    if(confirm('Are you sure you want to delete?')){
      return this.http.delete('http://localhost:8081/deleteAdmin/'+data.id)
    }
    else return this.http.get('http://localhost:8081/getAllAdmin').pipe(
      catchError(this.handleError)
    )
  }
  deleteConsumerData(data:any){
    if(confirm('Are you sure you want to delete?')){
      return this.http.delete('http://localhost:8081/deleteConsumer/'+data.id)
    }
    else return this.http.get('http://localhost:8081/getAllConsumers').pipe(
      catchError(this.handleError)
    )
  }

  editConsumerData(editData: any) {
    return this.http.get('http://localhost:8081/getConsumerById/'+editData.id).pipe(
      catchError(this.handleError))
  }

  editAdminData(editData: any) {
    return this.http.get('http://localhost:8081/getAdminById/'+editData.id).pipe(
      catchError(this.handleError))
  }

  handleError(error:HttpErrorResponse){
    let errMsg='';
    if(error.error instanceof ErrorEvent){
      errMsg=`Errormessage:${error.error.message}`
    }
    else{
      errMsg=`Errorcode:${error.status}\nErrormessage:${error.message} `
    }
    return throwError(errMsg);
  }
}
