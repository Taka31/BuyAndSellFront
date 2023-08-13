import { Component } from '@angular/core';
import { Listing } from '../type';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-listings-page',
  templateUrl: './listings-page.component.html',
  styleUrls: ['./listings-page.component.css']
})
export class ListingsPageComponent {

  listings : Listing[] = [];

  constructor(private listingService: ListingsService){

  } 

  ngOnInit():void{
    this.listingService.getListings().subscribe(listings=>this.listings=listings);
  }


}
