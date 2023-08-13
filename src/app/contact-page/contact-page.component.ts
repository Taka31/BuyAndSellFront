import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../type';
import { ListingsService } from '../listings.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent {

  email : string='';
  message: string ='';
  listing? : Listing;

  constructor(private route:ActivatedRoute, private router: Router, private listingService : ListingsService){

  }

  ngOnInit(): void {
    const id : any= this.route.snapshot.paramMap.get('id');
    this.listingService.getListingById(id).subscribe(listing=>{
      this.listing=listing
      this.message = `Hi, I'm interested in your ${this.listing!.name.toLowerCase()}!`;
    });
    
  }

  sendMessage(): void{
    alert('Your Message has been sent !');
    this.router.navigateByUrl('/listings');
  }

}
