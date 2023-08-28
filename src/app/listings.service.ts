import { Injectable } from '@angular/core';
import { Listing } from './type';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/compat/auth';

const httpOptions = {
  headers : new HttpHeaders(
    {
      'Content-Type':'application/json',
    }
  ) 
};

const httpOptionWithAuthToken = (token :any)  => ({
  headers : new HttpHeaders(
    {
      'Content-Type':'application/json',
      'AuthToken':token,
    })
});


@Injectable({
  providedIn: 'root'
})
export class ListingsService {

  constructor(private httpClient : HttpClient, private auth:AngularFireAuth) { }

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
    return new Observable<Listing[]>(observer=>{
      this.auth.user.subscribe(user=>{
        user && user.getIdToken().then(token => {
          if(user && token){
           this.httpClient.get<Listing[]>(`/api/users/${user.uid}/listings`,httpOptionWithAuthToken(token)).subscribe(listings=>observer.next(listings));
          }
          else{
            observer.next([]);
          }
        })
      })
    })
  

    
  }

  deleteListing(id:string):Observable<any>{
    return new Observable<any>(observer=>{
      this.auth.user.subscribe(user=>{
        user && user.getIdToken().then(token=>{
          this.httpClient.delete(`/api/listings/${id}`,httpOptionWithAuthToken(token)).subscribe(()=>observer.next());
        })
      })
    })
  }

  createListing(name:string,description:string,price:number):Observable<Listing>{

    return new Observable<Listing>(observer=>{
      this.auth.user.subscribe(user=>{
        user && user.getIdToken().then(token=>{
          this.httpClient.post<Listing>(`/api/listings`,{name,description,price},httpOptionWithAuthToken(token)).subscribe(()=>observer.next());
        })
      })
    })

  } 

  editListing(id : any,name:string,description:string,price:number):Observable<Listing>{

    return new Observable<Listing>(observer=>{
      this.auth.user.subscribe(user=>{
        user && user.getIdToken().then(token=>{
          this.httpClient.post<Listing>(`/api/listings/${id}`,{name,description,price},httpOptionWithAuthToken(token)).subscribe(()=>observer.next());
        })
      })
    })
  }

}
