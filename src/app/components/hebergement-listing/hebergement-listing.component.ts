import { Component, OnInit } from '@angular/core';
import { HousesService } from 'src/app/services/houses.service';
import { Router } from '@angular/router';
import { IHousesEntity } from 'src/app/models/houses';
import { HOUSE } from 'src/app/donnees/mock-houses';


@Component({
  selector: 'app-hebergement-listing',
  templateUrl: './hebergement-listing.component.html',
  styleUrls: ['./hebergement-listing.component.scss'],
  providers : [HousesService]

})
export class HebergementListingComponent implements OnInit {
  house: IHousesEntity[];

  constructor(private readonly HousesService: HousesService, private readonly router: Router){
    this.house = [];
  }

  /*appelle la requete*/ 
  ngOnInit(): void {
    this.HousesService.getHouses().subscribe(house => this.house = house)
  }

}
