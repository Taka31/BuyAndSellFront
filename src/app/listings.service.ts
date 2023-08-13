import { Injectable } from '@angular/core';
import { Listing } from './type';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers : new HttpHeaders(
    {
      'Content-Type':'application/json',
    }
  ) 
};

@Injectable({
  providedIn: 'root'
})
export class ListingsService {

  constructor(private httpClient : HttpClient) { }

  getListings():Observable<Listing[]>{
    return this.httpClient.get<Listing[]>(`/api/listings`);
  }

  getListingById(id:string) : Observable<Listing>{
    return this.httpClient.get<Listing>(`/api/listings/${id}`)
  }

  addViewToListing(id : string ):Observable<Listing>{
    return this.httpClient.post<Listing>(`/api/listings/${id}/add-view`,{},httpOptions)
  }

  getListingForUser():Observable<Listing[]>{
    return this.httpClient.get<Listing[]>(`/api/users/12345/listings`)
  }

  deleteListing(id:string):Observable<any>{
    return this.httpClient.delete(`/api/listings/${id}`);
  }

  createListing(name:string,description:string,price:number):Observable<Listing>{
    return this.httpClient.post<Listing>(`/api/listings`,{name,description,price},httpOptions)
  } 

  editListing(id : any,name:string,description:string,price:number):Observable<Listing>{
    return this.httpClient.post<Listing>(`/api/listings/${id}`,{name,description,price},httpOptions);
  }

}
