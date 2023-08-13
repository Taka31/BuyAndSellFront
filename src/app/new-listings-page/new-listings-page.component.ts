import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-new-listings-page',
  templateUrl: './new-listings-page.component.html',
  styleUrls: ['./new-listings-page.component.css']
})
export class NewListingsPageComponent {
  
  constructor(private router:Router, private listingService:ListingsService){

  }

  ngOnInit():void {

  }

  onSubmit({ name, description, price }:{name:string,description:string,price:number}): void {
    this.listingService.createListing(name, description, price)
      .subscribe(() => {
        this.router.navigateByUrl('/my-listings');
      });
  }


}
