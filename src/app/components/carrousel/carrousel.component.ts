import { Component, OnInit } from '@angular/core';

import { IHousesEntity } from 'src/app/models/houses';
import { HousesService } from 'src/app/services/houses.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.scss']
  
})
export class CarrouselComponent implements OnInit {
  params!: any;


  constructor(private readonly route: ActivatedRoute, private readonly housesService: HousesService) {
    this.route.params.subscribe(params => {
      this.params = params;
    });
  }

  houses!: IHousesEntity[];

  ngOnInit(): void {
  }

}
