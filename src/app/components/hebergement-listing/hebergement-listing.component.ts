import { Component, OnInit } from '@angular/core';
import { HousesService } from 'src/app/services/houses.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-hebergement-listing',
  templateUrl: './hebergement-listing.component.html',
  styleUrls: ['./hebergement-listing.component.scss'],
  providers : [HousesService]

})
export class HebergementListingComponent implements OnInit {
  houses: any[];

  constructor(private readonly HousesService: HousesService, private readonly router: Router){
    this.houses = [];
  }

  /*appelle la requete*/ 
  ngOnInit(): void {
    this.HousesService.getAllHouses().subscribe(houses => this.houses = houses)
  }

}
