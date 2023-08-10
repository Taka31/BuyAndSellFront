import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-listings-page',
  templateUrl: './new-listings-page.component.html',
  styleUrls: ['./new-listings-page.component.css']
})
export class NewListingsPageComponent {
  
  constructor(private router:Router){

  }

  ngOnInit():void {

  }

  onSubmit():void{
    alert('Creating a new listing....');
    this.router.navigateByUrl('/my-listings');
  }


}
