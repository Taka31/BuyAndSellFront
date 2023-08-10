import { Component } from '@angular/core';
import { Listing } from '../type';
import { fakeListings } from '../fake-data';

@Component({
  selector: 'app-my-listings-page',
  templateUrl: './my-listings-page.component.html',
  styleUrls: ['./my-listings-page.component.css']
})
export class MyListingsPageComponent {

  listings:Listing[]=[];

  constructor(){

  }

  ngOnInit():void{
    this.listings=fakeListings;
  }

  onDeleteClicked(listingId: string): void {
    alert(`Deleting your listing with id ${listingId}`);
  }

}
