import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HOUSE } from 'src/app/donnees/mock-houses';
import { IHousesEntity } from 'src/app/models/houses';
import { HousesService } from 'src/app/services/houses.service';

@Component({
  selector: 'app-page-house-details',
  templateUrl: './page-house-details.component.html',
  styleUrls: ['./page-house-details.component.scss']
})
export class PageHouseDetailsComponent implements OnInit {
  params!: any;

  constructor(private readonly route: ActivatedRoute, private readonly housesService: HousesService) { 
    this.route.params.subscribe(params => {
      this.params = params;
    });
  }
  houses!: IHousesEntity[];

  ngOnInit(): void {
    this.houses = HOUSE;
  }

}